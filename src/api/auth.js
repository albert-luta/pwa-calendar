import { auth, db } from './config';

export const apiLogin = ({ email, password }) => auth.signInWithEmailAndPassword(email, password);

export const apiLogout = () => auth.signOut();

// Create a new account and pre-populate with default info
export const apiCreateAccount = async ({ name, email, password }) => {
	await auth.createUserWithEmailAndPassword(email, password);
	await db
		.collection('users')
		.doc(email)
		.set({ name, email, settings: { theme: 'light' } });
};
