import { INCREMENT, DECREMENT, ADD } from '../actions/count';

const initialState = {
	count: 0
};

const count = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		case ADD:
			return { ...state, count: state.count + action.payload };
		default:
			return { ...state };
	}
};

export default count;
