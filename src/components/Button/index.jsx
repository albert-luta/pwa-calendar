import React, { memo } from 'react';
import { ButtonCss, ContentWrapperCss, ArrowWrapperCss } from './index.css';
import { LoaderCss } from '../shared/styles.css';
import { ReactComponent as ArrowSvg } from './svg/arrow.svg';

const Button = memo(function Button({
	children,
	outline,
	loading,
	disabled,
	back,
	noIcon,
	...rest
}) {
	return (
		<ButtonCss
			{...rest}
			outline={outline}
			back={back}
			disabled={disabled || loading}
			noIcon={noIcon}
		>
			{loading ? (
				<LoaderCss />
			) : (
				<>
					<ContentWrapperCss>{children}</ContentWrapperCss>
					{!noIcon && (
						<ArrowWrapperCss back={back}>
							<ArrowSvg />
						</ArrowWrapperCss>
					)}
				</>
			)}
		</ButtonCss>
	);
});

export default Button;
