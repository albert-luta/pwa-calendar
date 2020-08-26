import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { auth as authReducer } from './reducers';
import { auth } from '../api/config';
import { LOG_IN_SUCCESS, LOG_OUT_SUCCESS } from './actions/auth';

const rootReducer = combineReducers({ auth: authReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
auth.onAuthStateChanged((user) => {
	if (user) store.dispatch({ type: LOG_IN_SUCCESS, payload: user });
	else store.dispatch({ type: LOG_OUT_SUCCESS });
});

export default store;
export const dispatch = store.dispatch;
