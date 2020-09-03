import React, { memo, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES from '../constants/routes';
import { PrivateRoute, NonPrivateRoute } from './Utils';
import { HeaderAndMenuLayoutCss } from '../components/shared/styles.css';

import Login from '../pages/Login';
const Signup = lazy(() => import('../pages/Signup'));
const Header = lazy(() => import('../components/Header'));
const MenuBar = lazy(() => import('../components/MenuBar'));
const Appointments = lazy(() => import('../pages/Appointments'));
const Settings = lazy(() => import('../pages/Settings'));

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
					<Header />

					<Switch>
						<PrivateRoute path={ROUTES.APPOINTMENTS} exact>
							<Appointments />
						</PrivateRoute>

						<PrivateRoute path={ROUTES.STATISTICS} exact>
							<div>Statistics</div>
						</PrivateRoute>

						<PrivateRoute path={ROUTES.SETTINGS} exact>
							<Settings />
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
