import {
	FETCH_STATISTICS_BEGIN,
	FETCH_STATISTICS_SUCCESS,
	FETCH_STATISTICS_ERROR,
	RESET_STATISTICS
} from '../actions/statistics';
import ERRORS from '../../constants/errors';

const INITIAL_STATE = {
	groups: null,

	statisticsLoading: false,
	statisticsError: ''
};

const statistics = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_STATISTICS_BEGIN:
			return { ...state, statisticsLoading: true, statisticsError: '' };
		case FETCH_STATISTICS_SUCCESS:
			return { ...state, statisticsLoading: false, ...action.payload };
		case FETCH_STATISTICS_ERROR:
			return { ...state, statisticsLoading: false, statisticsError: ERRORS.SERVER };

		case RESET_STATISTICS:
			return { ...INITIAL_STATE };

		default:
			return { ...state };
	}
};

export default statistics;
