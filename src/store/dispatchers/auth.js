import { dispatch } from '../../store';
import {
	LOG_IN_BEGIN,
	LOG_IN_ERROR,
	LOG_OUT_BEGIN,
	LOG_OUT_ERROR,
	CREATE_ACCOUNT_BEGIN,
	CREATE_ACCOUNT_ERROR
} from '../actions/auth';
import { apiLogin, apiLogout, apiCreateAccount } from '../../api/auth';

export const login = (credentials) =>
	dispatch(async (dispatch) => {
		dispatch({ type: LOG_IN_BEGIN });
		try {
			await apiLogin(credentials);
		} catch (error) {
			dispatch({ type: LOG_IN_ERROR });
			throw error;
		}
	});

export const logout = () =>
	dispatch(async (dispatch) => {
		dispatch({ type: LOG_OUT_BEGIN });
		try {
			await apiLogout();
		} catch (error) {
			dispatch({ type: LOG_OUT_ERROR });
			throw error;
		}
	});

export const createAccount = (credentials) =>
	dispatch(async (dispatch) => {
		dispatch({ type: CREATE_ACCOUNT_BEGIN });
		try {
			await apiCreateAccount(credentials);
		} catch (error) {
			dispatch({ type: CREATE_ACCOUNT_ERROR });
			throw error;
		}
	});
