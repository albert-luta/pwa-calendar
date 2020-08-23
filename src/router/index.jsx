import React, { memo, useEffect } from 'react';
import { BrowserRouter, Switch, useLocation } from 'react-router-dom';
import Routes from './Routes';

const ScrollToTop = memo(function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
});

const Router = memo(function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />

			<Switch>
				<Routes />
			</Switch>
		</BrowserRouter>
	);
});

export default Router;
