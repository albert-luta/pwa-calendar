import React, { memo } from 'react';
import { LoaderWrapperCss } from './index.css';
import logo from '../shared/assets/images/logo-192.png';

const Loader = memo(function Loader() {
	return (
		<LoaderWrapperCss>
			<img src={logo} alt="Loading" />
		</LoaderWrapperCss>
	);
});

export default Loader;
