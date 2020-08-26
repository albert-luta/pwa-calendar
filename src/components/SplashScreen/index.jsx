import React, { memo } from 'react';
import { SplashScreenWrapperCss } from './index.css';
import logo from '../shared/assets/images/logo-192.png';

const SplashScreen = memo(function SplashScreen() {
	return (
		<SplashScreenWrapperCss>
			<img src={logo} alt="Loading" />
		</SplashScreenWrapperCss>
	);
});

export default SplashScreen;
