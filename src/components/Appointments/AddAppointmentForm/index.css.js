import styled from 'styled-components';

export const TitleCss = styled.h2`
	color: var(--clr-text);
	margin-bottom: 40px;
`;

export const ButtonContainerCss = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 15px;

	& > * {
		width: 47.5%;
	}
`;
