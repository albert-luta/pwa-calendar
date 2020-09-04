import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { MainContainerCss } from '../shared/styles.css';

export const AppointmentsContainerCss = styled(MainContainerCss)`
	background: var(--clr-background);
	user-select: none;
	position: relative;
`;

export const DayCss = styled.div`
	margin-top: 2.5px;
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

	&:last-child {
		margin-bottom: 25px;
	}

	& ${DayCss} {
		flex: 0 1 7.5%;
		min-width: 70px;
	}

	& ${AppointmentsWrapperCss} {
		flex: 1;
	}
`;

export const AppointmentContainerCss = styled(
	memo(function AppointmentContainerCss({ completed, children, ...props }) {
		return <div {...props}>{children}</div>;
	})
)`
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

	${({ completed }) =>
		completed &&
		css`
			background: var(--clr-success--alpha-50);

			&:hover {
				background: var(--clr-success--alpha-60);
			}
		`};
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

export const AddAppointmentButtonCss = styled.button`
	position: fixed;
	bottom: calc(60px + 25px);
	right: 25px;
	width: 65px;
	height: 65px;
	border-radius: 50%;
	color: var(--clr-white);
	background: var(--clr-main);
	transition: background var(--transition-time);
	box-shadow: 0 0.35rem 0.4rem rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 22.5%;
		height: auto;
	}

	&:hover {
		background: var(--clr-main--hover);
	}

	@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
		right: 50%;
		transform: translateX(50%);
	}
`;
