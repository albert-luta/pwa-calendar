import React, { memo, useEffect } from 'react';
import { StatisticsContainerCss, StatisticsErrorCss } from '../components/Statistics/index.css';
import {
	ContentWrapperCss,
	ContentTitleCss,
	CenteredWrapperCss,
	LoaderCss
} from '../components/shared/styles.css';
import { GroupPercentage } from '../components/Statistics';
import { fetchStatistics } from '../store/dispatchers/statistics';
import { useSelector } from 'react-redux';

const Statistics = memo(function Statistics() {
	useEffect(() => {
		fetchStatistics();
	}, []);

	const statisticsLoading = useSelector(({ statistics }) => statistics.statisticsLoading);
	const statisticsError = useSelector(({ statistics }) => statistics.statisticsError);

	const groups = useSelector(({ statistics }) => statistics.groups);

	return (
		<StatisticsContainerCss>
			{statisticsLoading || statisticsError ? (
				<CenteredWrapperCss>
					{statisticsLoading ? (
						<LoaderCss size={40} />
					) : (
						<StatisticsErrorCss>{statisticsError}</StatisticsErrorCss>
					)}
				</CenteredWrapperCss>
			) : (
				<ContentWrapperCss>
					<ContentTitleCss>Groups</ContentTitleCss>
					{groups &&
						Object.entries(groups).map(([title, { completed, total }]) => (
							<GroupPercentage
								key={title}
								title={title}
								percentage={completed / total}
							/>
						))}
				</ContentWrapperCss>
			)}
		</StatisticsContainerCss>
	);
});

export default Statistics;
