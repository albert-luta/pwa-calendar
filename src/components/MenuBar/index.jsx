import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuBarContainerCss, LinkCss } from './index.css';
import { ReactComponent as CalendarSvg } from './svg/calendar.svg';
import { ReactComponent as StatisticsSvg } from './svg/statistics.svg';
import { ReactComponent as SettingsSvg } from './svg/settings.svg';
import ROUTES from '../../constants/routes';

const MenuBar = memo(function MenuBar() {
	const { pathname } = useLocation();

	return (
		<MenuBarContainerCss>
			<LinkCss to={ROUTES.APPOINTMENTS} active={pathname === ROUTES.APPOINTMENTS}>
				<CalendarSvg id="calendar" />
			</LinkCss>
			<LinkCss to={ROUTES.STATISTICS} active={pathname === ROUTES.STATISTICS}>
				<StatisticsSvg id="statistics" />
			</LinkCss>
			<LinkCss to={ROUTES.SETTINGS} active={pathname === ROUTES.SETTINGS}>
				<SettingsSvg id="settings" />
			</LinkCss>
		</MenuBarContainerCss>
	);
});

export default MenuBar;
