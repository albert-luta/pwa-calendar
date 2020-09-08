import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { auth as authReducer, appointments, statistics, settings } from './reducers';
import { auth } from '../api/config';
import { LOG_IN_SUCCESS, LOG_OUT_SUCCESS } from './actions/auth';
import { RESET_APPOINTMENTS } from './actions/appointments';
import { RESET_SETTINGS } from './actions/settings';
import { fetchSettings } from './dispatchers/settings';

const rootReducer = combineReducers({ auth: authReducer, appointments, statistics, settings });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
auth.onAuthStateChanged((user) => {
	// User is logged in
	if (user) {
		store.dispatch({ type: LOG_IN_SUCCESS, payload: user });
		fetchSettings(user);
	}
	// User is not logged in
	else {
		store.dispatch({ type: LOG_OUT_SUCCESS });
		store.dispatch({ type: RESET_APPOINTMENTS });
		store.dispatch({ type: RESET_SETTINGS });
	}
});

export default store;
export const dispatch = store.dispatch;
