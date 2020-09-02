import styled, { css } from 'styled-components';

export const ModalContainerCss = styled.section`
	position: fixed;
	z-index: 1000;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	pointer-events: none;
	background: var(--clr-black--alpha-50);
	opacity: 0;
	transition: opacity var(--transition-time);
	display: flex;
	justify-content: center;
	align-items: center;

	${({ active }) =>
		active &&
		css`
			opacity: 1;
			pointer-events: all;
		`}
`;

export const ModalContentWrapperCss = styled.div`
	position: relative;
	width: 90%;
	max-width: 650px;
	max-height: 90vh;
	overflow-x: hidden;
	overflow-y: auto;
	background: var(--clr-background);
	border-radius: 10px;
	padding: 20px 30px;
`;

export const CloseButtonCss = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	color: var(--clr-text);
	padding: 10px;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: rotate(45deg);

	svg {
		width: 22.5px;
		height: auto;
	}
`;
