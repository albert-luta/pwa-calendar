import React, { memo } from 'react';
import { Route } from 'react-router-dom';

const Routes = memo(function Routes() {
	return (
		<>
			<Route path="/" exact>
				<div>Homepage</div>
			</Route>

			<Route path="/about" exact>
				<div>About</div>
			</Route>
		</>
	);
});

export default Routes;
