import React, { memo } from 'react';
import { LoginWrapperCss, HeaderCss, MainCss, TitleCss } from '../components/Login/index.css';
import { LoginForm } from '../components/Login';

const Login = memo(function Login() {
	return (
		<LoginWrapperCss>
			<HeaderCss>
				<h1>PWA Calendar</h1>
			</HeaderCss>
			<MainCss>
				<TitleCss>Welcome</TitleCss>

				<LoginForm />
			</MainCss>
		</LoginWrapperCss>
	);
});

export default Login;
