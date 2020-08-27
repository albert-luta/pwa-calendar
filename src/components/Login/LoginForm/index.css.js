import styled from 'styled-components';

export const ButtonsContainerCss = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;

	& > *:first-child {
		margin-right: 6%;
	}

	a {
		display: block;
		width: 100%;
		text-decoration: none;
	}
`;
