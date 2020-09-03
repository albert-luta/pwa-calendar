import {
	FETCH_SETTINGS_BEGIN,
	FETCH_SETTINGS_SUCCESS,
	FETCH_SETTINGS_ERROR,
	TOGGLE_THEME_BEGIN,
	TOGGLE_THEME_SUCCESS,
	TOGGLE_THEME_ERROR,
	RESET_SETTINGS
} from '../actions/settings';
import ERRORS from '../../constants/errors';

const INITIAL_STATE = {
	theme: 'light',
	toggleThemeLoading: false,

	settingsLoading: false,
	settingsError: ''
};

const settings = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_SETTINGS_BEGIN:
			return { ...state, settingsLoading: true, settingsError: '' };
		case FETCH_SETTINGS_SUCCESS:
			return { ...state, settingsLoading: false, ...action.payload };
		case FETCH_SETTINGS_ERROR:
			return { ...state, settingsLoading: false, settingsError: ERRORS.SERVER };

		case TOGGLE_THEME_BEGIN:
			return { ...state, toggleThemeLoading: true };
		case TOGGLE_THEME_SUCCESS:
			return {
				...state,
				toggleThemeLoading: false,
				theme: state.theme === 'light' ? 'dark' : 'light'
			};
		case TOGGLE_THEME_ERROR:
			return { ...state, toggleThemeLoading: false };

		case RESET_SETTINGS:
			return { ...INITIAL_STATE };

		default:
			return { ...state };
	}
};

export default settings;
