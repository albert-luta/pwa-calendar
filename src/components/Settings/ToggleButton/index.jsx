import React, { memo } from 'react';
import { ToggleButtonWrapperCss, ToggleButtonCss } from './index.css';
import { ContentFieldTitleCss, LoaderCss } from '../../shared/styles.css';

const ToggleButton = memo(function ToggleButton({ title, loading, isToggledOn, ...props }) {
	return (
		<ToggleButtonWrapperCss {...props} loading={loading}>
			<ContentFieldTitleCss>{title}</ContentFieldTitleCss>
			{loading ? <LoaderCss color="text" /> : <ToggleButtonCss isToggledOn={isToggledOn} />}
		</ToggleButtonWrapperCss>
	);
});

export default ToggleButton;
