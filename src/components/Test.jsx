import React, { memo, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement, addWithDelay } from '../store/dispatchers/count';

const Test = memo(function Test() {
	const count = useSelector(({ count }) => count.count);
	const [value, setValue] = useState(0);

	const add = useCallback(() => addWithDelay(value), [value]);

	return (
		<>
			<div>Count: {count}</div>
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
			<input
				type="number"
				value={value}
				onChange={(e) => setValue(parseInt(e.target.value))}
			/>
			<button onClick={add}>Add</button>
		</>
	);
});

export default Test;
