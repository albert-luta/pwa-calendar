import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES from '../constants/routes';
import { Login } from '../pages';
import { PrivateRoute, NonPrivateRoute } from './Utils';

const Routes = memo(function Routes() {
	return (
		<Switch>
			<NonPrivateRoute path={ROUTES.LOGIN} exact>
				<Login />
			</NonPrivateRoute>

			<NonPrivateRoute path={ROUTES.SIGN_UP} exact>
				<div>Sign up</div>
			</NonPrivateRoute>

			<PrivateRoute path={ROUTES.APPOINTMENTS} exact>
				<div>Appointments</div>
			</PrivateRoute>

			<PrivateRoute path={ROUTES.STATISTICS} exact>
				<div>Statistics</div>
			</PrivateRoute>

			<PrivateRoute path={ROUTES.SETTINGS} exact>
				<div>Settings</div>
			</PrivateRoute>

			<Route path="*">
				<div>404</div>
			</Route>
		</Switch>
	);
});

export default Routes;
