import styled, { css } from 'styled-components';

export const ContentWrapperCss = styled.div`
	transition: transform var(--transition-time);
`;

export const ArrowWrapperCss = styled.div`
	position: absolute;
	width: 15px;
	top: 50%;
	transform: translate(0, -50%);
	right: 40%;
	opacity: 0;
	transition: transform var(--transition-time), opacity var(--transition-time);
`;

export const LoaderCss = styled.div`
	border: 3px solid var(--clr-background);
	border-top-color: transparent;
	border-radius: 50%;
	width: 1.125rem;
	height: 1.125rem;

	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const ButtonCss = styled.button`
	border: 0;
	background: transparent;
	position: relative;
	user-select: none;

	border-radius: 100px;
	padding: 10px 15px;
	border: 1px solid var(--clr-text);
	background: var(--clr-text);
	color: var(--clr-background);
	display: flex;
	justify-content: center;
	align-items: center;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) and (hover: hover) {
		&:hover {
			& ${ArrowWrapperCss} {
				opacity: 1;
				transform: translate(10px, -50%);
			}

			& ${ContentWrapperCss} {
				transform: translateX(-15px);
			}
		}
	}

	${({ outline }) =>
		outline &&
		css`
			background: var(--clr-background);
			color: var(--clr-text);

			& ${LoaderCss} {
				border-color: var(--clr-text);
				border-top-color: transparent;
			}
		`}
`;
