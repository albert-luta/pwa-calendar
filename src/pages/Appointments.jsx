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
} from '../components/Appointments/index.css';
import { LoaderCss } from '../components/shared/styles.css';
import { generateMonthKey } from '../utils/appointments';
import { fetchMonth, addAppointment } from '../store/dispatchers/appointments';
import { ReactComponent as PlusSvg } from '../components/shared/assets/icons/plus.svg';
import Modal from '../components/Modal';
import { AppointmentForm, ChangeAppointment } from '../components/Appointments';
import DAY_NAMES from '../constants/dayNames';

const APPOINTMENT_TO_CHANGE_PLACEHOLDER = {
	date: {
		day: 1,
		monthIndex: 0,
		year: 2020
	},
	details: {
		title: 'Placeholder',
		start: '00:00',
		end: '01:00',
		group: null
	}
};

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

	const [showChangeAppointmentModal, setShowChangeAppointmentModal] = useState(false);
	const openChangeAppointmentModal = useCallback(() => setShowChangeAppointmentModal(true), []);
	const closeChangeAppointmentModal = useCallback(() => setShowChangeAppointmentModal(false), []);
	const [appointmentToChange, setAppointmentToChange] = useState(
		APPOINTMENT_TO_CHANGE_PLACEHOLDER
	);

	const addAppointmentLoading = useSelector(
		({ appointments }) => appointments.addAppointmentLoading
	);

	return (
		<>
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
										key={generateAppointmentKey({
											day,
											title,
											start,
											end,
											group
										})}
										onClick={() => {
											openChangeAppointmentModal();
											setAppointmentToChange({
												date: { ...selectedMonth, day: parseInt(day) },
												details: { title, start, end, group }
											});
										}}
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
			</AppointmentsContainerCss>

			<Modal active={showChangeAppointmentModal} onClose={closeChangeAppointmentModal}>
				<ChangeAppointment
					appointment={appointmentToChange}
					onClose={closeChangeAppointmentModal}
				/>
			</Modal>

			<AddAppointmentButtonCss type="button" onClick={openAddAppointmentModal}>
				<PlusSvg />
			</AddAppointmentButtonCss>
			<Modal active={showAddAppointmentModal} onClose={closeAddAppointmentModal}>
				<AppointmentForm
					title="New Appointment"
					buttonText="Add Appointment"
					successText="Appointment added successfully"
					active={showAddAppointmentModal}
					loading={addAppointmentLoading}
					action={addAppointment}
				/>
			</Modal>
		</>
	);
});

export default Appointments;
