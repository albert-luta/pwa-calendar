import {
	UPDATE_SELECTED_MONTH,
	FETCH_MONTH_BEGIN,
	FETCH_MONTH_SUCCESS,
	FETCH_MONTH_ERROR,
	ADD_APPOINTMENT_BEGIN,
	ADD_APPOINTMENT_SUCCESS,
	ADD_APPOINTMENT_ERROR
} from '../actions/appointments';
import { calculateMonths, getCurrentMonth, generateMonthKey } from '../../utils/appointments';
import ERRORS from '../../constants/errors';

const MONTHS = calculateMonths();
const populateMonths = (value) =>
	MONTHS.reduce((acc, curr) => ({ ...acc, [generateMonthKey(curr)]: value }), {});

const INITIAL_STATE = {
	selectedMonth: getCurrentMonth(),

	months: populateMonths(null),
	loaders: populateMonths(false),
	errors: populateMonths(''),

	addAppointmentLoading: false
};

const appointments = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_SELECTED_MONTH:
			return { ...state, selectedMonth: action.payload };

		case FETCH_MONTH_BEGIN:
			return {
				...state,
				loaders: { ...state.loaders, [action.payload]: true },
				errors: { ...state.errors, [action.payload]: '' }
			};
		case FETCH_MONTH_SUCCESS:
			return {
				...state,
				loaders: { ...state.loaders, [action.payload.monthKey]: false },
				months: { ...state.months, [action.payload.monthKey]: action.payload.month }
			};
		case FETCH_MONTH_ERROR:
			return {
				...state,
				loaders: { ...state.loaders, [action.payload]: false },
				months: { ...state.months, [action.payload]: null },
				errors: { ...state.errors, [action.payload]: ERRORS.SERVER }
			};

		case ADD_APPOINTMENT_BEGIN:
			return { ...state, addAppointmentLoading: true };
		case ADD_APPOINTMENT_SUCCESS:
		case ADD_APPOINTMENT_ERROR:
			return { ...state, addAppointmentLoading: false };

		default:
			return { ...state };
	}
};

export default appointments;
