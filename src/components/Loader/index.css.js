import styled from 'styled-components';

export const LoaderWrapperCss = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100000;
	background: var(--clr-background);
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 30vw;
		max-width: 160px;
		height: auto;
	}
`;
