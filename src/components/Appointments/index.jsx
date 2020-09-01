import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
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
	NoAppointmentsCss,
	AddAppointmentButtonCss
} from './index.css';
import { LoaderCss } from '../shared/styles.css';
import { generateMonthKey } from '../../utils/appointments';
import { fetchMonth } from '../../store/dispatchers/appointments';
import { ReactComponent as PlusSvg } from '../shared/assets/icons/plus.svg';
import Modal from '../Modal';
import AddAppointmentForm from './AddAppointmentForm';
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

	const [showAddAppointmentModal, setShowAddAppointmentModal] = useState(false);
	const openAddAppointmentModal = useCallback(() => setShowAddAppointmentModal(true), []);
	const closeAddAppointmentModal = useCallback(() => setShowAddAppointmentModal(false), []);

	const noAppointment = useMemo(
		() => !!(loading || error || !Object.entries(month ?? {}).length),
		[loading, error, month]
	);
	const noAppointmentContent = useMemo(() => {
		let content;

		if (noAppointment) {
			if (loading) content = <LoaderCss color="text" size={40} />;
			else if (error) content = <ErrorCss>{error}</ErrorCss>;
			else
				content = (
					<NoAppointmentsCss>There are no appointments this month</NoAppointmentsCss>
				);
		}

		return content;
	}, [noAppointment, loading, error]);

	return (
		<AppointmentsContainerCss>
			{noAppointment ? (
				<CenteredWrapperCss>{noAppointmentContent}</CenteredWrapperCss>
			) : (
				Object.entries(month).map(([day, dayAppointments]) => (
					<DayContainerCss key={day}>
						<DayCss>
							<h3>{day}</h3>
							<h5>
								{calculateDayName({
									...selectedMonth,
									day: parseInt(day)
								}).slice(0, 3)}
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
				))
			)}

			<AddAppointmentButtonCss type="button" onClick={openAddAppointmentModal}>
				<PlusSvg />
			</AddAppointmentButtonCss>
			<Modal active={showAddAppointmentModal} onClose={closeAddAppointmentModal}>
				<AddAppointmentForm active={showAddAppointmentModal} />
			</Modal>
		</AppointmentsContainerCss>
	);
});

export default Appointments;
