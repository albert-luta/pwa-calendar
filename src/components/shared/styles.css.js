import styled from 'styled-components';

export const FormWrapperCss = styled.form`
	width: 100%;
	max-width: 650px;
	margin: 0 auto;
`;

export const LabelCss = styled.label`
	display: block;
	font-size: 1.25rem;
	margin-bottom: 5px;
	color: var(--clr-text);
`;

export const InputWrapperCss = styled.div`
	margin-bottom: 20px;
`;

export const InputCss = styled.input`
	display: block;
	border: none;
	padding: 0;
	width: 100%;
	background: transparent;

	color: var(--clr-text);
	font-family: var(--font);
	font-size: 1.125rem;
	border-bottom: 1px solid var(--clr-text);
	padding: 8px 10px;
	margin-bottom: 5px;
`;

export const HeaderAndMenuLayoutCss = styled.section`
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > *:nth-child(1),
	& > *:nth-child(3) {
		flex: 0;
	}

	& > *:nth-child(2) {
		flex: 1;
	}
`;

export const MainContainerCss = styled.main`
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0 2%;
`;

export const LoaderCss = styled.div`
	border: ${({ size = 22 }) => size / 6}px solid
		${({ color = 'background' }) => `var(--clr-${color})`};
	border-top-color: transparent;
	border-radius: 50%;
	width: ${({ size = 22 }) => size}px;
	height: ${({ size = 22 }) => size}px;

	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
