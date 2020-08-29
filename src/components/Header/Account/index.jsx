import React, { memo, useState, useCallback } from 'react';
import { ReactComponent as AccountSvg } from './svg/account.svg';
import { ButtonCss } from '../index.css';
import Dropdown, { Item } from '../Dropdown';
import { logout } from '../../../store/dispatchers/auth';

const Account = memo(function Account() {
	const [showDropdown, setShowDropdown] = useState(false);
	const toggleDropdown = useCallback(() => setShowDropdown((showDropdown) => !showDropdown), []);
	const closeDropdown = useCallback(() => setShowDropdown(false), []);

	const handleLogout = useCallback(async () => {
		try {
			await logout();
		} catch (error) {
			console.log('Error at logout.');
		}
	}, []);

	return (
		<div>
			<ButtonCss type="button" onClick={toggleDropdown}>
				<AccountSvg />
			</ButtonCss>
			<Dropdown active={showDropdown} align="right" onClose={closeDropdown}>
				<Item bold color="error" onClick={handleLogout}>
					Log out
				</Item>
			</Dropdown>
		</div>
	);
});

export default Account;
