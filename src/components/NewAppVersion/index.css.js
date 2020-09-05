import styled from 'styled-components';

export const NewAppVersionWrapperCss = styled.section`
	background: var(--clr-background);
	border-radius: 15px;
	border: 1px solid var(--clr-text);
	color: var(--clr-text);
	width: 80vw;
	max-width: 550px;
	opacity: 0;
	padding: 25px;
	padding-bottom: 15px;
	position: fixed;
	right: 15px;
	bottom: 70px;
	transition: opacity 0.5s ease-in-out;
	z-index: -1;
	pointer-events: none;

	@media (min-width: 1024px) {
		bottom: 15px;
	}

	&.show {
		pointer-events: all;
		opacity: 1;
		z-index: 9999999;
	}
`;

export const ContentWrapperCss = styled.div`
	margin-bottom: 20px;
	text-align: center;

	h3 {
		margin-bottom: 5px;
	}
`;
