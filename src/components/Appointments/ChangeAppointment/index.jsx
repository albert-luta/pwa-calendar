import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ChevronLeftSvg } from '../../shared/assets/icons/chevron-left.svg';
import {
	BackButtonCss,
	TitleCss,
	ContentWrapperCss,
	BelowTitleWrapperCss,
	ActionButtonsWrapperCss,
	DeleteTitleCss,
	DeleteButtonsWrapperCss,
	ToggleCompletedWrapperCss
} from './index.css';
import Button from '../../Button';
import {
	deleteAppointment,
	editAppointment,
	toggleCompleted
} from '../../../store/dispatchers/appointments';
import Message from '../../Message';
import AppointmentForm from '../AppointmentForm';
import { correctSingleDigit } from '../../../utils/appointments';
import { LoaderCss } from '../../shared/styles.css';
import ERRORS from '../../../constants/errors';

const STEPS = {
	CHOOSE_ACTION: 0,
	EDIT: 1,
	DELETE: 2
};

const getHoursAndMinutes = (time) => time.split(':').map((a) => parseInt(a));
const getTimeObject = (time) => {
	const [hours, minutes] = getHoursAndMinutes(time);

	return { hours, minutes, value: time };
};
const getDateObject = ({ day, monthIndex, year }) => ({
	day,
	monthIndex,
	year,
	value: `${year}-${correctSingleDigit(monthIndex + 1)}-${correctSingleDigit(day)}`
});
const Container = memo(function Container({ active, children }) {
	if (!active) return null;
	return children;
});

const ChangeAppointment = memo(function ChangeAppointment({
	appointment,
	appointment: { date, details },
	onClose
}) {
	const [step, setStep] = useState(STEPS.CHOOSE_ACTION);
	const goBack = useCallback(() => setStep(STEPS.CHOOSE_ACTION), []);
	const goToEdit = useCallback(() => setStep(STEPS.EDIT), []);
	const goToDelete = useCallback(() => setStep(STEPS.DELETE), []);
	useEffect(() => setStep(STEPS.CHOOSE_ACTION), [appointment]);

	const [deleteServerError, setDeleteServerError] = useState('');
	const memoDeleteAppointment = useCallback(async () => {
		setDeleteServerError('');

		try {
			await deleteAppointment(appointment);
			onClose();
		} catch (error) {
			setDeleteServerError(ERRORS.SERVER);
		}
	}, [appointment, onClose]);

	const editAppointmentLoading = useSelector(
		({ appointments }) => appointments.editAppointmentLoading
	);
	const deleteAppointmentLoading = useSelector(
		({ appointments }) => appointments.deleteAppointmentLoading
	);

	const initialCredentials = useMemo(
		() => ({
			title: details.title,
			group: details.group,
			date: getDateObject(date),
			start: getTimeObject(details.start),
			end: getTimeObject(details.end)
		}),
		[details.title, details.group, date, details.start, details.end]
	);
	const memoEditAppointment = useCallback(
		(updated) => editAppointment({ old: appointment, updated }),
		[appointment]
	);

	const [toggleCompletedLoading, setToggleCompletedLoading] = useState(false);
	const [toggleCompletedError, setToggleCompletedError] = useState('');
	const toggleCompletedStatus = useCallback(async () => {
		setToggleCompletedLoading(true);
		setToggleCompletedError('');

		try {
			await toggleCompleted(appointment);
			onClose();
		} catch (error) {
			setToggleCompletedError(ERRORS.SERVER);
		} finally {
			setToggleCompletedLoading(false);
		}
	}, [onClose, appointment]);

	return (
		<>
			<BackButtonCss active={!!step} type="button" onClick={goBack}>
				<ChevronLeftSvg />
				<span>Back</span>
			</BackButtonCss>

			<ContentWrapperCss>
				<TitleCss>
					{details.title}
					<small>
						{details.start} - {details.end}
					</small>
					<small>
						{date.day} {date.monthName} {date.year}
					</small>
				</TitleCss>

				<BelowTitleWrapperCss>
					<Container active={step === STEPS.CHOOSE_ACTION}>
						<ActionButtonsWrapperCss>
							<div>
								<ToggleCompletedWrapperCss>
									{toggleCompletedLoading ? (
										<LoaderCss color="text" />
									) : (
										<label>
											<input
												type="checkbox"
												checked={details.completed ?? false}
												onChange={toggleCompletedStatus}
											/>
											Mark us{' '}
											{details.completed ? 'uncompleted' : 'completed'}
										</label>
									)}
								</ToggleCompletedWrapperCss>
								<Message active={!!toggleCompletedError}>
									{toggleCompletedError}
								</Message>
							</div>
							<Button noIcon outline type="button" onClick={goToEdit}>
								Edit
							</Button>
							<Button noIcon type="button" onClick={goToDelete} id="delete">
								Delete
							</Button>
						</ActionButtonsWrapperCss>
					</Container>

					<Container active={step === STEPS.EDIT}>
						<AppointmentForm
							buttonText="Edit"
							active={step === STEPS.EDIT}
							loading={editAppointmentLoading}
							initialCredentials={initialCredentials}
							action={memoEditAppointment}
							onSuccess={onClose}
						/>
					</Container>

					<Container active={step === STEPS.DELETE}>
						<DeleteTitleCss>
							Are you sure you want to delete this appointment?
						</DeleteTitleCss>
						<Message active={!!deleteServerError}>{deleteServerError}</Message>
						<DeleteButtonsWrapperCss>
							<Button
								noIcon
								type="button"
								id="delete"
								loading={deleteAppointmentLoading}
								onClick={memoDeleteAppointment}
							>
								Yes, delete it
							</Button>
							<Button noIcon outline type="button" onClick={onClose}>
								No
							</Button>
						</DeleteButtonsWrapperCss>
					</Container>
				</BelowTitleWrapperCss>
			</ContentWrapperCss>
		</>
	);
});

export default ChangeAppointment;
