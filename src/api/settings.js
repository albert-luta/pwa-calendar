import { db } from './config';

export const apiFetchSettings = async ({ email }) => {
	const user = await db.collection('users').doc(email).get();

	return user.data().settings;
};

export const apiToggleTheme = async ({ email }, currentTheme) => {
	await db
		.collection('users')
		.doc(email)
		.update({
			'settings.theme': currentTheme === 'light' ? 'dark' : 'light'
		});
};
