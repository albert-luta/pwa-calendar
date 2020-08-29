import styled from 'styled-components';

export const HeaderContainerCss = styled.header`
	padding: 15px 2%;
	background: var(--clr-main);
	color: var(--clr-white);

	svg {
		width: 30px;
		height: auto;
	}

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ButtonCss = styled.button`
	width: auto;
	padding: 10px 15px;
	border-radius: 10px;
	transition: background var(--transition-time);
	color: var(--clr-white);

	&:hover {
		background: var(--clr-main--hover);
	}
`;
