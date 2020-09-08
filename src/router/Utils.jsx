import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTES from '../constants/routes';

// Redirect to the login page if the user is not logged in and goes to a NonPrivateRoute
export const PrivateRoute = memo(function PrivateRoute({ children, ...rest }) {
	const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

	return (
		<Route
			{...rest}
			render={() => {
				if (!isLoggedIn) {
					return <Redirect to={ROUTES.LOGIN} />;
				}

				return children;
			}}
		/>
	);
});

// Redirect to the appointments tab if the user is connected and goes to a PrivateRoute
export const NonPrivateRoute = memo(function NonPrivateRoute({ children, ...rest }) {
	const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

	return (
		<Route
			{...rest}
			render={() => {
				if (isLoggedIn) {
					return <Redirect to={ROUTES.APPOINTMENTS} />;
				}

				return children;
			}}
		/>
	);
});
