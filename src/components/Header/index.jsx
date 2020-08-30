import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainerCss, SpecificContentContainerCss } from './index.css';
import Account from './Account';
import Appointments from './Appointments';
import ROUTES from '../../constants/routes';

const Container = memo(function Container({ active, children }) {
	if (!active) return null;
	return children;
});

const Header = memo(function Header() {
	const { pathname } = useLocation();

	return (
		<HeaderContainerCss>
			<SpecificContentContainerCss>
				<Container active={pathname === ROUTES.APPOINTMENTS}>
					<Appointments />
				</Container>

				<Container active={pathname === ROUTES.STATISTICS}>
					<h2>Statistics</h2>
				</Container>

				<Container active={pathname === ROUTES.SETTINGS}>
					<h2>Settings</h2>
				</Container>
			</SpecificContentContainerCss>
			<Account />
		</HeaderContainerCss>
	);
});

export default Header;
