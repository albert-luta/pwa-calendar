import styled from 'styled-components';

export const MessageCss = styled.small`
	display: block;
	min-height: calc(1rem * 1.4);
	color: ${({ type }) => `var(--clr-${type})`};
	opacity: 0;
	transition: opacity var(--transition-time);

	${({ active }) => active && 'opacity: 1'};
`;
