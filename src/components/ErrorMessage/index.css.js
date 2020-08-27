import styled from 'styled-components';

export const ErrorMessageCss = styled.small`
	display: block;
	min-height: 1rem;
	color: var(--clr-error);
	opacity: 0;
	transition: opacity var(--transition-time);

	${({ active }) => active && 'opacity: 1'};
`;
