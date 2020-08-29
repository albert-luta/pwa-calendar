import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBarContainerCss = styled.footer`
	display: flex;
	justify-content: space-between;
	height: 60px;
`;

const activeButton = css`
	svg {
		transform: translateY(-6.5px);
	}

	&::after {
		opacity: 1;
		transform: translate(-50%, 15px);
	}
`;
const FilteredLink = memo(function FilteredLink({ active, ...props }) {
	return <Link {...props} />;
});
export const LinkCss = styled(FilteredLink)`
	flex: 1;
	height: 100%;
	background: var(--clr-main);
	transition: background var(--transition-time);
	color: var(--clr-white);
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: auto;
		transition: transform var(--transition-time);
	}
	#calendar {
		width: 24px;
	}
	#statistics {
		width: 33px;
	}
	#settings {
		width: 27px;
	}

	&::after {
		display: block;
		content: '';
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--clr-white);
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 10px);
		transition: opacity var(--transition-time), transform var(--transition-time);
	}

	&:hover {
		background: var(--clr-main--hover);

		${activeButton}
	}

	${({ active }) => active && activeButton}
`;
