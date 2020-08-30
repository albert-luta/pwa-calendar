import { dispatch } from '../../store';
import {
	UPDATE_SELECTED_MONTH,
	FETCH_MONTH_BEGIN,
	FETCH_MONTH_SUCCESS,
	FETCH_MONTH_ERROR
} from '../actions/appointments';
import { apiFetchMonth } from '../../api/appointments';

export const updateSelectedMonth = (newlySelectedMonth) =>
	dispatch({ type: UPDATE_SELECTED_MONTH, payload: newlySelectedMonth });

export const fetchMonth = (monthKey) =>
	dispatch(async (dispatch) => {
		dispatch({ type: FETCH_MONTH_BEGIN, payload: monthKey });
		try {
			const month = await apiFetchMonth(monthKey);
			dispatch({ type: FETCH_MONTH_SUCCESS, payload: { month, monthKey } });
		} catch (error) {
			dispatch({ type: FETCH_MONTH_ERROR, payload: monthKey });
		}
	});
