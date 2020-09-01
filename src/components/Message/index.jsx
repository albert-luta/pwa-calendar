import React, { memo } from 'react';
import { MessageCss } from './index.css';

const Message = memo(function Message({ active, type = 'error', children }) {
	return (
		<MessageCss active={active} type={type}>
			{children}
		</MessageCss>
	);
});

export default Message;
