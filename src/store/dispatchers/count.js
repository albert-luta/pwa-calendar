import { dispatch } from '../../store';
import { INCREMENT, DECREMENT, ADD } from '../actions/count';

export const increment = () => dispatch({ type: INCREMENT });
export const decrement = () => dispatch({ type: DECREMENT });
export const add = (value) => dispatch({ type: ADD, payload: value });
export const addWithDelay = (value) =>
	dispatch((dispatch) => setTimeout(() => dispatch({ type: ADD, payload: value }), 2000));
