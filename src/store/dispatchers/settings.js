import { dispatch } from '../../store';
import {
	FETCH_SETTINGS_BEGIN,
	FETCH_SETTINGS_SUCCESS,
	FETCH_SETTINGS_ERROR,
	TOGGLE_THEME_BEGIN,
	TOGGLE_THEME_SUCCESS,
	TOGGLE_THEME_ERROR
} from '../actions/settings';
import { apiFetchSettings, apiToggleTheme } from '../../api/settings';

// Fetch settings
export const fetchSettings = (user) =>
	dispatch(async (dispatch) => {
		dispatch({ type: FETCH_SETTINGS_BEGIN });

		try {
			const settings = await apiFetchSettings(user);
			dispatch({ type: FETCH_SETTINGS_SUCCESS, payload: settings });
		} catch (error) {
			dispatch({ type: FETCH_SETTINGS_ERROR });
		}
	});

// Toggle theme from 'dark' to 'light'
export const toggleTheme = () =>
	dispatch(async (dispatch, getState) => {
		dispatch({ type: TOGGLE_THEME_BEGIN });

		try {
			const {
				auth: { user },
				settings: { theme }
			} = getState();
			await apiToggleTheme(user, theme);
			dispatch({ type: TOGGLE_THEME_SUCCESS });
		} catch (error) {
			dispatch({ type: TOGGLE_THEME_ERROR });
			// Put an error prop on the Settings -> ToggleButton and show it there
			// throw error;
		}
	});
