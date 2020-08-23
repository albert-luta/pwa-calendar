import styled from 'styled-components';

export const OfflineBarCss = styled.div`
	position: fixed;
	top: 0;
	z-index: 10000;
	width: 100vw;
	text-align: center;
	background: var(--clr-error);
	padding: 0 15px;

	p {
		color: var(--clr-white);
	}
`;
