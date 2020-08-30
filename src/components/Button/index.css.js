import styled, { css } from 'styled-components';
import { LoaderCss } from '../shared/styles.css';

export const ContentWrapperCss = styled.div`
	transition: transform var(--transition-time);
`;

export const ArrowWrapperCss = styled.div`
	position: absolute;
	width: 15px;
	display: flex;
	align-items: center;
	top: 50%;
	transform: translate(0, -50%);
	right: 40%;
	opacity: 0;
	transition: transform var(--transition-time), opacity var(--transition-time);

	svg {
		width: 100%;
		height: auto;
	}

	${({ back }) =>
		back &&
		css`
			right: auto;
			left: 40%;
			transform: translate(0, -50%) rotate(180deg);
		`}
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

			${({ back }) =>
				back &&
				css`
					& ${ArrowWrapperCss} {
						transform: translate(-10px, -50%) rotate(180deg);
					}

					& ${ContentWrapperCss} {
						transform: translateX(15px);
					}
				`}
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
