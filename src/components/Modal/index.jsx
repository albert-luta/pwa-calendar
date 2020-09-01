import React, { memo, useCallback } from 'react';
import { ModalContainerCss, ModalContentWrapperCss, CloseButtonCss } from './index.css';
import { ReactComponent as PlusSvg } from '../shared/assets/icons/plus.svg';

const Modal = memo(function Modal({ active, onClose, children }) {
	const handleClickOutside = useCallback(
		(e) => {
			e.stopPropagation();
			if (e.target === e.currentTarget) onClose();
		},
		[onClose]
	);

	return (
		<ModalContainerCss onClick={handleClickOutside} active={active}>
			<ModalContentWrapperCss>
				{children}
				<CloseButtonCss onClick={onClose} type="button">
					<PlusSvg />
				</CloseButtonCss>
			</ModalContentWrapperCss>
		</ModalContainerCss>
	);
});

export default Modal;
