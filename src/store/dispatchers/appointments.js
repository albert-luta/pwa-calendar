import { dispatch } from '../../store';
import { UPDATE_SELECTED_MONTH } from '../actions/appointments';

export const updateSelectedMonth = (newlySelectedMonth) =>
	dispatch({ type: UPDATE_SELECTED_MONTH, payload: newlySelectedMonth });
