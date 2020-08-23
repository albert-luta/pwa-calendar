import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { count } from './reducers';

const rootReducer = combineReducers({ count });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
export const dispatch = store.dispatch;
