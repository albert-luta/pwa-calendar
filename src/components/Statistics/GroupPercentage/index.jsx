import React, { memo } from 'react';
import { ContentFieldWrapperCss } from '../../shared/styles.css';
import { TitleCss, PercentageBarWrapperCss, PercentageBarCss } from './index.css';

const GroupPercentage = memo(function GroupPercentage({ title, percentage = 0 }) {
	return (
		<ContentFieldWrapperCss>
			<TitleCss>{title}</TitleCss>
			<PercentageBarWrapperCss>
				<PercentageBarCss percentage={percentage} />
				<p>{Math.trunc(percentage * 100)}%</p>
			</PercentageBarWrapperCss>
		</ContentFieldWrapperCss>
	);
});

export default GroupPercentage;
