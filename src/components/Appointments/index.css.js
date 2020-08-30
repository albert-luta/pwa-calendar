import styled from 'styled-components';
import { MainContainerCss } from '../shared/styles.css';

export const AppointmentsContainerCss = styled(MainContainerCss)`
	background: var(--clr-background);
	user-select: none;
`;

export const DayCss = styled.div`
	margin-top: 2.5px;
	margin-right: 5%;
	text-align: center;

	h3,
	h5 {
		font-weight: 500;
	}

	h3 {
		color: var(--clr-text);
	}
	h5 {
		color: var(--clr-text-alpha-65);
	}
`;

export const AppointmentsWrapperCss = styled.div``;

export const DayContainerCss = styled.section`
	margin-top: 25px;
	display: flex;
	justify-content: space-between;

	& ${DayCss} {
		flex: 0;
	}

	& ${AppointmentsWrapperCss} {
		flex: 1;
	}
`;

export const AppointmentContainerCss = styled.div`
	background: var(--clr-text-alpha-05);
	border-radius: 10px;
	padding: 15px 25px;
	margin-bottom: 12.5px;
	box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
	cursor: pointer;
	transition: background var(--transition-time);

	&:hover {
		background: var(--clr-text-alpha-10);
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const TitleCss = styled.h4`
	color: var(--clr-text);
`;

export const HourCss = styled.h5`
	color: var(--clr-text-alpha-50);
	font-weight: 500;
`;

export const GroupCss = styled.small`
	color: var(--clr-text-alpha-50);
	font-weight: 500;
	display: block;
	margin-top: 15px;
`;

export const CenteredWrapperCss = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ErrorCss = styled.p`
	color: var(--clr-error);
`;

export const NoAppointmentsCss = styled.p`
	color: var(--clr-text);
`;
