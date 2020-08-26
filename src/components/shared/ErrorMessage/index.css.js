import styled from 'styled-components';

export const ErrorMessageCss = styled.small`
	color: var(--clr-error);
	opacity: 0;
	transition: opacity var(--transition-time);

	${({ active }) => active && 'opacity: 1'};
`;
