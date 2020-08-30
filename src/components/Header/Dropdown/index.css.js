import styled, { css } from 'styled-components';

export const DropdownWrapperCss = styled.div`
	position: relative;
`;

export const DropdownCss = styled.ul`
	position: absolute;
	background: var(--clr-background);
	border: 1px solid var(--clr-text);
	border-radius: 10px;
	overflow-x: hidden;
	overflow-y: auto;
	max-height: 50vh;
	transform: translateY(0) scale(0);
	transform-origin: top ${({ align }) => align};
	pointer-events: none;
	transition: transform var(--transition-time);

	${({ align }) => align}:0;
	${({ active }) =>
		active &&
		css`
			transform: translateY(10px) scale(1);
			pointer-events: all;
		`};
`;

export const ListItemCss = styled.li`
	position: relative;
	transition: background var(--transition-time);

	&:hover {
		background: var(--clr-text-alpha-05);
	}

	&::after {
		position: absolute;
		display: block;
		content: '';
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		width: 50%;
		margin: 0 auto;
		background: ${({ color }) => color};
	}

	&:last-child {
		&::after {
			display: none;
		}
	}
`;

export const ItemContentCss = styled.button`
	padding: 10px 20px;
	white-space: nowrap;
	font-size: 1.125rem;
	color: ${({ color }) => color};

	${({ bold }) => bold && 'font-weight: 500'};
`;
