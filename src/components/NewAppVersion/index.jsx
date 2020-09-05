import React, { memo } from 'react';
import { NewAppVersionWrapperCss, ContentWrapperCss } from './index.css';
import Button from '../Button';

const NewAppVersion = memo(function NewAppVersion() {
	return (
		<NewAppVersionWrapperCss id="new-app-version">
			<ContentWrapperCss>
				<h3>A new version has been released!</h3>
				<p>Update the app and close this window for changes to take effect</p>
			</ContentWrapperCss>
			<Button noIcon type="button" id="new-app-version-button">
				Update
			</Button>
		</NewAppVersionWrapperCss>
	);
});

export default NewAppVersion;
