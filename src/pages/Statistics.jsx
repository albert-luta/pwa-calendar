import React, { memo, useEffect } from 'react';
import { StatisticsContainerCss } from '../components/Statistics/index.css';
import { ContentWrapperCss, ContentTitleCss } from '../components/shared/styles.css';
import { GroupPercentage } from '../components/Statistics';
import { fetchStatistics } from '../store/dispatchers/statistics';

const Statistics = memo(function Statistics() {
	useEffect(() => {
		fetchStatistics();
	}, []);

	return (
		<StatisticsContainerCss>
			<ContentWrapperCss>
				<ContentTitleCss>Groups</ContentTitleCss>
				<GroupPercentage title="General" percentage={0} />
				<GroupPercentage title="General General GeneralGeneral" percentage={1} />
			</ContentWrapperCss>
		</StatisticsContainerCss>
	);
});

export default Statistics;
