import styled, { css } from 'styled-components';

export const InstallAppWrapperCss = styled.div`
	background: var(--clr-background);
	border-radius: 15px;
	border: 1px solid var(--clr-black);
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
	display: flex;
	pointer-events: none;

	${({ active }) =>
		active &&
		css`
			pointer-events: all;
			opacity: 1;
			z-index: 9999999;
		`}
`;
