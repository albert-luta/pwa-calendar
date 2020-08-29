import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES from '../constants/routes';
import { Login, Signup } from '../pages';
import { PrivateRoute, NonPrivateRoute } from './Utils';
import { HeaderAndMenuLayoutCss } from '../components/shared/styles.css';
import MenuBar from '../components/MenuBar';

const Routes = memo(function Routes() {
	return (
		<Switch>
			<NonPrivateRoute path={ROUTES.LOGIN} exact>
				<Login />
			</NonPrivateRoute>

			<NonPrivateRoute path={ROUTES.SIGN_UP} exact>
				<Signup />
			</NonPrivateRoute>

			<Route path={[ROUTES.APPOINTMENTS, ROUTES.STATISTICS, ROUTES.SETTINGS]}>
				<HeaderAndMenuLayoutCss>
					<h1>Header</h1>

					<Switch>
						<PrivateRoute path={ROUTES.APPOINTMENTS} exact>
							<div>Appointments</div>
						</PrivateRoute>

						<PrivateRoute path={ROUTES.STATISTICS} exact>
							<div>Statistics</div>
						</PrivateRoute>

						<PrivateRoute path={ROUTES.SETTINGS} exact>
							<div>Settings</div>
						</PrivateRoute>
					</Switch>

					<MenuBar />
				</HeaderAndMenuLayoutCss>
			</Route>

			<Route path="*">
				<div>404</div>
			</Route>
		</Switch>
	);
});

export default Routes;
