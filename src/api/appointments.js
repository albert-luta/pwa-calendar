import { db } from './config';
import store from '../store';
import { generateMonthKey } from '../utils/appointments';

let prevUser = null;
let dbAppointmentsRef = null;

store.subscribe(() => {
	const {
		auth: { user }
	} = store.getState();

	if (user === prevUser) return;

	if (!user) dbAppointmentsRef = null;
	else dbAppointmentsRef = db.collection('users').doc(user.email).collection('appointments');

	prevUser = user;
});

export const apiFetchMonth = async (monthKey) => {
	const month = await dbAppointmentsRef.doc(monthKey).get();
	if (month.exists) return month.data();
	else return {};
};

const transformInTotalMinutes = (time) => {
	const [hours, minutes] = time.split(':').map((a) => parseInt(a));

	return hours * 60 + minutes;
};
const sortAppointments = (appointments) =>
	[...appointments].sort(
		(a, b) => transformInTotalMinutes(a.start) - transformInTotalMinutes(b.start)
	);
export const apiAddAppointment = async ({ title, date, start, end, group }) => {
	const monthKey = generateMonthKey(date);
	const appointment = {
		title,
		start,
		end,
		group: group || null
	};

	const month = await dbAppointmentsRef.doc(monthKey).get();
	if (month.exists) {
		const day = month.data()[date.day];
		if (day) {
			await dbAppointmentsRef.doc(monthKey).update({
				[date.day]: sortAppointments([...day, appointment])
			});
		} else {
			await dbAppointmentsRef.doc(monthKey).update({
				[date.day]: [appointment]
			});
		}
	} else {
		await dbAppointmentsRef.doc(monthKey).set({
			[date.day]: [appointment]
		});
	}
};
