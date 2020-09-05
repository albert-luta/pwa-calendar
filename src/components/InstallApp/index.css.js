import styled, { css } from 'styled-components';

export const InstallAppWrapperCss = styled.section`
	background: var(--clr-background);
	border-radius: 15px;
	border: 1px solid var(--clr-text);
	width: 80vw;
	max-width: 550px;
	opacity: 0;
	padding: 25px;
	padding-bottom: 15px;
	position: fixed;
	right: 15px;
	top: 70px;
	transition: opacity 0.5s ease-in-out;
	z-index: -1;
	pointer-events: none;

	${({ active }) =>
		active &&
		css`
			pointer-events: all;
			opacity: 1;
			z-index: 9999999;
		`}
`;

export const ContentWrapperCss = styled.div`
	color: var(--clr-text);
	text-align: center;
	margin-bottom: 20px;

	h3 {
		margin-bottom: 5px;
	}
`;

export const ButtonsWrapperCss = styled.div`
	& > * {
		margin-bottom: 10px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;
