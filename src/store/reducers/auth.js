import {
	LOG_IN_BEGIN,
	LOG_IN_SUCCESS,
	LOG_IN_ERROR,
	LOG_OUT_BEGIN,
	LOG_OUT_SUCCESS,
	LOG_OUT_ERROR,
	CREATE_ACCOUNT_BEGIN,
	CREATE_ACCOUNT_ERROR
} from '../actions/auth';

const INITIAL_STATE = {
	user: null,
	userLoading: false,
	isLoggedIn: false
};

const auth = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOG_IN_BEGIN:
		case LOG_OUT_BEGIN:
		case CREATE_ACCOUNT_BEGIN:
			return { ...state, userLoading: true };
		case LOG_IN_ERROR:
		case LOG_OUT_ERROR:
		case CREATE_ACCOUNT_ERROR:
			return { ...state, userLoading: false };
		case LOG_IN_SUCCESS:
			return { user: action.payload, userLoading: false, isLoggedIn: true };
		case LOG_OUT_SUCCESS:
			return { ...INITIAL_STATE };
		default:
			return { ...state };
	}
};

export default auth;
