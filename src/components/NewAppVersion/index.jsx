import React, { memo } from 'react';
import { NewAppVersionWrapperCss } from './index.css';

const NewAppVersion = memo(function NewAppVersion() {
	return (
		<NewAppVersionWrapperCss id="new-app-version">
			<button type="button" id="new-app-version-button">
				Update the app
			</button>
		</NewAppVersionWrapperCss>
	);
});

export default NewAppVersion;
