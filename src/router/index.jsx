import React, { memo, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './Routes';

// Scroll to top on every route change
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

			<Routes />
		</BrowserRouter>
	);
});

export default Router;
