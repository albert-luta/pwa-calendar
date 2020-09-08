import { db } from './config';
import store from '../store';

// Useful data from the store, so i don't need to pass it down on every api call
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

const getDocumentsFromCollection = (collection) => {
	let documents = [];
	collection.forEach((doc) => documents.push(doc.data()));

	return documents;
};
const INITIAL_GROUP_STATS = {
	completed: 0,
	total: 0
};
const INITIAL_GROUPS = {
	General: { ...INITIAL_GROUP_STATS },
	'No group': { ...INITIAL_GROUP_STATS }
};
const calculateCompletedGroupObject = ({ completed }) => ({
	completed: completed ? 1 : 0,
	total: 1
});
// Merge 2 objects with groups
const mergeGroups = (groups1, groups2) => {
	const rootGroups = JSON.parse(JSON.stringify(groups1));
	Object.entries(groups2).forEach(([name, details]) => {
		if (name in rootGroups) {
			// If the month exists in both objects of groups, add the values from both of them
			rootGroups[name] = {
				completed: rootGroups[name].completed + details.completed,
				total: rootGroups[name].total + details.total
			};
		} else {
			// If the month exists in just 1 object of groups, just copy it
			rootGroups[name] = { ...details };
		}
	});

	return rootGroups;
};
const calculateGroupStatistics = (documents) => {
	// Merge all month groups
	const allGroups = documents.reduce((monthAcc, monthCurr) => {
		// Merge all day groups of a month
		const monthGroups = Object.values(monthCurr).reduce((dayAcc, dayCurr) => {
			// Merge all groups of an appointment
			const dayGroups = dayCurr.reduce((appointmentAcc, appointmentCurr) => {
				const appointmentGroups = { ...INITIAL_GROUPS };
				const completedGroupObject = calculateCompletedGroupObject(appointmentCurr);

				if (appointmentCurr.group) {
					appointmentGroups[appointmentCurr.group] = { ...completedGroupObject };
				} else appointmentGroups['No group'] = { ...completedGroupObject };
				appointmentGroups.General = { ...completedGroupObject };

				return mergeGroups(appointmentAcc, appointmentGroups);
			}, {});

			return mergeGroups(dayAcc, dayGroups);
		}, {});

		return mergeGroups(monthAcc, monthGroups);
	}, {});

	return allGroups;
};
export const apiFetchStatistics = async () => {
	const documents = await dbAppointmentsRef.get().then(getDocumentsFromCollection);

	return { groups: calculateGroupStatistics(documents) };
};
