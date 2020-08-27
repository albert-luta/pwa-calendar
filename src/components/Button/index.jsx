import React, { memo } from 'react';
import { ButtonCss, ContentWrapperCss, ArrowWrapperCss, LoaderCss } from './index.css';
import { ReactComponent as ArrowSvg } from './svg/arrow.svg';

const Button = memo(function Button({ children, outline, loading, disabled, ...rest }) {
	return (
		<ButtonCss {...rest} outline={outline} disabled={disabled || loading}>
			{loading ? (
				<LoaderCss />
			) : (
				<>
					<ContentWrapperCss>{children}</ContentWrapperCss>
					<ArrowWrapperCss>
						<ArrowSvg />
					</ArrowWrapperCss>
				</>
			)}
		</ButtonCss>
	);
});

export default Button;
