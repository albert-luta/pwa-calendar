import React, { memo, useEffect, useCallback } from 'react';
import { DropdownWrapperCss, DropdownCss, ListItemCss, ItemContentCss } from './index.css';

const Dropdown = memo(function Dropdown({ active, align = 'left', onClose, children }) {
	const handleClick = useCallback(() => {
		if (active) onClose();
	}, [active, onClose]);

	useEffect(() => {
		window.addEventListener('click', handleClick);

		return () => window.removeEventListener('click', handleClick);
	}, [handleClick]);

	return (
		<DropdownWrapperCss>
			<DropdownCss active={active} align={align}>
				{children}
			</DropdownCss>
		</DropdownWrapperCss>
	);
});

export default Dropdown;

const Item = memo(function Item({ color, bold, children, ...props }) {
	const computedColor = `var(--clr-${color ?? 'text'})`;
	return (
		<ListItemCss color={computedColor}>
			<ItemContentCss {...props} type="button" color={computedColor} bold={bold}>
				{children}
			</ItemContentCss>
		</ListItemCss>
	);
});
export { Item };
