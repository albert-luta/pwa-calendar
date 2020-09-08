import { dispatch } from '../../store';
import {
	FETCH_STATISTICS_BEGIN,
	FETCH_STATISTICS_SUCCESS,
	FETCH_STATISTICS_ERROR
} from '../actions/statistics';
import { apiFetchStatistics } from '../../api/statistics';

// Fetch and calculate all statistics
export const fetchStatistics = () =>
	dispatch(async (dispatch) => {
		dispatch({ type: FETCH_STATISTICS_BEGIN });

		try {
			const statistics = await apiFetchStatistics();
			dispatch({ type: FETCH_STATISTICS_SUCCESS, payload: statistics });
		} catch (error) {
			dispatch({ type: FETCH_STATISTICS_ERROR });
			console.log(error);
		}
	});
