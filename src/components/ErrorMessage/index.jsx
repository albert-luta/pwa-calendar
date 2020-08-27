import React, { memo } from 'react';
import { ErrorMessageCss } from './index.css';

const ErrorMessage = memo(function ErrorMessage({ active, children }) {
	return <ErrorMessageCss active={active}>{children}</ErrorMessageCss>;
});

export default ErrorMessage;
