import React, { memo } from 'react';
import { ToggleButtonWrapperCss, TitleCss, ToggleButtonCss } from './index.css';
import { LoaderCss } from '../../shared/styles.css';

const ToggleButton = memo(function ToggleButton({ title, loading, isToggledOn, ...props }) {
	return (
		<ToggleButtonWrapperCss {...props} type="button" loading={loading}>
			<TitleCss>{title}</TitleCss>
			{loading ? <LoaderCss color="text" /> : <ToggleButtonCss isToggledOn={isToggledOn} />}
		</ToggleButtonWrapperCss>
	);
});

export default ToggleButton;
