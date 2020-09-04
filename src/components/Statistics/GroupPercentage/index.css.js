import styled from 'styled-components';
import { ContentFieldTitleCss } from '../../shared/styles.css';

export const TitleCss = styled(ContentFieldTitleCss)`
	word-break: break-word;
`;

export const PercentageBarCss = styled.div`
	position: relative;
	height: 10px;
	border-radius: 100px;
	background: var(--clr-text-alpha-50);
	overflow: hidden;

	&::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		display: block;
		border-radius: 100px;
		content: '';
		background: var(--clr-text);
		width: ${({ percentage }) => percentage * 100}%;
	}
`;

export const PercentageBarWrapperCss = styled.div`
	flex: 0 0 60%;
	margin-left: 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	& ${PercentageBarCss} {
		flex: 1;
	}

	p {
		flex: 0 0 40px;
		margin-left: 15px;
		color: var(--clr-text);
		text-align: right;
	}
`;
