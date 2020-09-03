import React, { memo } from 'react';
import styled from 'styled-components';

export const ToggleButtonWrapperCss = styled(
	memo(function ToggleButtonWrapperCss({ loading, children, ...props }) {
		return <button {...props}>{children}</button>;
	})
)`
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	user-select: none;
	cursor: pointer;
	border-bottom: 1px solid var(--clr-text-alpha-50);

	&:last-child {
		border-bottom: none;
	}

	${({ loading }) => loading && 'cursor: not-allowed'};
`;

export const TitleCss = styled.h4`
	color: var(--clr-text);
`;

export const ToggleButtonCss = styled.div`
	width: 30px;
	height: 15px;
	border-radius: 100px;
	background: var(--clr-text-alpha-35);
	transition: background var(--transition-time);

	${({ isToggledOn }) => isToggledOn && 'background: var(--clr-text-alpha-85)'};
`;
