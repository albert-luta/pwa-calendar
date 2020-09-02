import React, { memo, useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ChevronLeftSvg } from '../../shared/assets/icons/chevron-left.svg';
import {
	BackButtonCss,
	TitleCss,
	ContentWrapperCss,
	BelowTitleWrapperCss,
	ActionButtonsWrapperCss,
	DeleteTitleCss,
	DeleteButtonsWrapperCss
} from './index.css';
import Button from '../../Button';
import { deleteAppointment } from '../../../store/dispatchers/appointments';
import Message from '../../Message';
import ERRORS from '../../../constants/errors';

const STEPS = {
	CHOOSE_ACTION: 0,
	FORM: 1
};

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
	const goBack = useCallback(() => setStep((step) => step - 1), []);
	const goToForm = useCallback(() => setStep(STEPS.FORM), []);
	useEffect(() => setStep(STEPS.CHOOSE_ACTION), [appointment]);

	const [serverError, setServerError] = useState('');
	const memoDeleteAppointment = useCallback(async () => {
		setServerError('');

		try {
			await deleteAppointment(appointment);
			onClose();
		} catch (error) {
			setServerError(ERRORS.SERVER);
		}
	}, [appointment, onClose]);

	const deleteAppointmentLoading = useSelector(
		({ appointments }) => appointments.deleteAppointmentLoading
	);

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
							<Button noIcon outline type="button" onClick={goToForm}>
								Edit
							</Button>
							<Button noIcon type="button" onClick={goToForm} id="delete">
								Delete
							</Button>
						</ActionButtonsWrapperCss>
					</Container>

					<Container active={step === STEPS.FORM}>
						<DeleteTitleCss>
							Are you sure you want to delete this appointment?
						</DeleteTitleCss>
						<Message active={!!serverError}>{serverError}</Message>
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
