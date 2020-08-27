import styled from 'styled-components';

export const LoginWrapperCss = styled.section`
	min-height: 100vh;
	background: var(--clr-main);
`;

export const HeaderCss = styled.header`
	height: 40vh;
	color: var(--clr-white);
	user-select: none;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MainCss = styled.main`
	min-height: 60vh;
	background: var(--clr-background);
	padding: 20px 12%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
`;

export const TitleCss = styled.h2`
	text-align: center;
	color: var(--clr-text);
	user-select: none;

	margin-bottom: 85px;
`;
