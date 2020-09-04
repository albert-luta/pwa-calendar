import styled, { css } from 'styled-components';

export const BackButtonCss = styled.button`
	position: absolute;
	top: 10px;
	left: 10px;
	color: var(--clr-text);
	padding: 10px;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	pointer-events: none;
	transition: opacity var(--transition-time);

	svg {
		width: auto;
		height: 27.5px;
	}
	span {
		font-weight: 500;
		margin-left: 15px;
		font-size: 1.25rem;
	}

	${({ active }) =>
		active &&
		css`
			opacity: 1;
			pointer-events: all;
		`};
`;

export const TitleCss = styled.h2`
	color: var(--clr-text);
	text-align: center;

	small {
		display: block;
		font-weight: 500;
		color: var(--clr-text-alpha-50);
	}
`;

export const ContentWrapperCss = styled.div`
	margin-top: 50px;
`;

export const BelowTitleWrapperCss = styled.div`
	margin-top: 20px;
`;

export const ActionButtonsWrapperCss = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > * {
		width: 50%;
		margin-bottom: 15px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	#delete {
		background: var(--clr-error);
		border-color: var(--clr-error);
	}
`;

export const DeleteTitleCss = styled.h3`
	text-align: center;
	color: var(--clr-text);
`;

export const DeleteButtonsWrapperCss = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;

	& > * {
		width: 47.5%;
	}

	#delete {
		background: var(--clr-error);
		border-color: var(--clr-error);
	}
`;

export const ToggleCompletedWrapperCss = styled.div`
	display: flex;
	justify-content: center;

	label {
		display: block;
		text-align: center;
		color: var(--clr-text);
	}
`;
