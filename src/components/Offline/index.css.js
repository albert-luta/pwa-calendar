import styled from 'styled-components';

export const OfflineBarCss = styled.section`
	position: fixed;
	top: 0;
	z-index: 10000;
	width: 100vw;
	text-align: center;
	background: var(--clr-error);
	padding: 10px 15px;

	p {
		color: var(--clr-white);
	}
`;
