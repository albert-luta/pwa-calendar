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

const getDocumentsFromCollection = (collection) => {
	let documents = [];
	collection.forEach((doc) => documents.push(doc.data()));

	return documents;
};
const calculateStatistics = (documents) => {
	// const statistics = documents.reduce((acc, curr) => {
	// 	Object.values(curr).reduce()
	// }, {})

	return documents;
};
export const apiFetchStatistics = async () => {
	const documents = await dbAppointmentsRef.get().then(getDocumentsFromCollection);

	return calculateStatistics(documents);
};
