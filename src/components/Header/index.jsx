import React, { memo } from 'react';
import { HeaderContainerCss } from './index.css';
import Account from './Account';

const Header = memo(function Header() {
	return (
		<HeaderContainerCss>
			<h1>Appointments</h1>
			<Account />
		</HeaderContainerCss>
	);
});

export default Header;
