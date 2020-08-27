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

	font-family: var(--font);
	font-size: 1.125rem;
	border-bottom: 1px solid var(--clr-text);
	padding: 8px 10px;
	margin-bottom: 5px;
`;
