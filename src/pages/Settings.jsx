import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { SettingsContainerCss } from '../components/Settings/index.css';
import { ContentWrapperCss, ContentTitleCss } from '../components/shared/styles.css';
import { ToggleButton } from '../components/Settings';
import { toggleTheme } from '../store/dispatchers/settings';

const Settings = memo(function Settings() {
	const theme = useSelector(({ settings }) => settings.theme);
	const toggleThemeLoading = useSelector(({ settings }) => settings.toggleThemeLoading);

	return (
		<SettingsContainerCss>
			<ContentWrapperCss>
				<ContentTitleCss>General</ContentTitleCss>
				<ToggleButton
					title="Dark Mode"
					isToggledOn={theme === 'dark'}
					loading={toggleThemeLoading}
					onClick={toggleTheme}
				/>
			</ContentWrapperCss>
		</SettingsContainerCss>
	);
});

export default Settings;
