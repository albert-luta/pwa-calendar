import { db } from './config';
import store from '../store';

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
	// await dbAppointmentsRef.doc(monthKey).set({});
	const month = await dbAppointmentsRef.doc(monthKey).get();
	if (month.exists) return month.data();
	else return {};
};
