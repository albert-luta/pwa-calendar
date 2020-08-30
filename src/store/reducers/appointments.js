import { UPDATE_SELECTED_MONTH } from '../actions/appointments';
import { getCurrentMonth } from '../../utils/appointments';

const INITIAL_STATE = {
	selectedMonth: getCurrentMonth()
};

const appointments = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_SELECTED_MONTH:
			return { ...state, selectedMonth: action.payload };
		default:
			return { ...state };
	}
};

export default appointments;
