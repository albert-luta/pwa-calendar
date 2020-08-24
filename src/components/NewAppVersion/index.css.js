import styled from 'styled-components';

export const NewAppVersionWrapperCss = styled.div`
	background: white;
	border-radius: 15px;
	border: 1px solid var(--clr-error);
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
	display: flex;

	@media (min-width: 1024px) {
		bottom: 15px;
	}

	&.show {
		opacity: 1;
		z-index: 9999999;
	}
`;
