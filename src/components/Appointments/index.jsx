import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	AppointmentsContainerCss,
	DayContainerCss,
	DayCss,
	AppointmentsWrapperCss,
	AppointmentContainerCss,
	TitleCss,
	HourCss,
	GroupCss,
	CenteredWrapperCss,
	ErrorCss,
	NoAppointmentsCss
} from './index.css';
import { LoaderCss } from '../shared/styles.css';
import { generateMonthKey } from '../../utils/appointments';
import { fetchMonth } from '../../store/dispatchers/appointments';
import DAY_NAMES from '../../constants/dayNames';

const generateAppointmentKey = (details) => Object.values(details).join('-');
const calculateDayName = ({ day, monthIndex, year }) => {
	const dayNameIndex = new Date(year, monthIndex, day).getDay();

	return DAY_NAMES[dayNameIndex];
};

const Appointments = memo(function Appointments() {
	const selectedMonth = useSelector(({ appointments }) => appointments.selectedMonth);
	const selectedMonthKey = generateMonthKey(selectedMonth);
	const month = useSelector(({ appointments: { months } }) => months[selectedMonthKey]);

	useEffect(() => {
		if (!month) fetchMonth(selectedMonthKey);
	}, [month, selectedMonthKey]);

	const loading = useSelector(({ appointments: { loaders } }) => loaders[selectedMonthKey]);
	const error = useSelector(({ appointments: { errors } }) => errors[selectedMonthKey]);

	if (loading || error || !Object.entries(month ?? {}).length) {
		let content;
		if (loading) content = <LoaderCss color="text" size={40} />;
		else if (error) content = <ErrorCss>{error}</ErrorCss>;
		else content = <NoAppointmentsCss>There are no appointments this month</NoAppointmentsCss>;

		return (
			<AppointmentsContainerCss>
				<CenteredWrapperCss>{content}</CenteredWrapperCss>
			</AppointmentsContainerCss>
		);
	}

	return (
		<AppointmentsContainerCss>
			{Object.entries(month).map(([day, dayAppointments]) => (
				<DayContainerCss key={day}>
					<DayCss>
						<h3>{day}</h3>
						<h5>
							{calculateDayName({ ...selectedMonth, day: parseInt(day) }).slice(0, 3)}
						</h5>
					</DayCss>
					<AppointmentsWrapperCss>
						{dayAppointments.map(({ title, start, end, group }) => (
							<AppointmentContainerCss
								key={generateAppointmentKey({ day, title, start, end, group })}
							>
								<TitleCss>{title}</TitleCss>
								<HourCss>
									{start} - {end}
								</HourCss>
								{group && <GroupCss>{group}</GroupCss>}
							</AppointmentContainerCss>
						))}
					</AppointmentsWrapperCss>
				</DayContainerCss>
			))}
		</AppointmentsContainerCss>
	);
});

export default Appointments;
