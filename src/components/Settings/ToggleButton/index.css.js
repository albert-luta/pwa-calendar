import React, { memo } from 'react';
import styled from 'styled-components';
import { ContentFieldWrapperCss } from '../../shared/styles.css';

export const ToggleButtonWrapperCss = styled(
	memo(function ToggleButtonWrapperCss({ loading, children, ...props }) {
		return (
			<button type="button" {...props}>
				<ContentFieldWrapperCss>{children}</ContentFieldWrapperCss>
			</button>
		);
	})
)`
	${({ loading }) => loading && 'cursor: not-allowed'};
`;

export const ToggleButtonCss = styled.div`
	width: 30px;
	height: 15px;
	border-radius: 100px;
	background: var(--clr-text-alpha-35);
	transition: background var(--transition-time);

	${({ isToggledOn }) => isToggledOn && 'background: var(--clr-text-alpha-85)'};
`;
