import React, { memo } from 'react';
import { SignupForm } from '../components/Signup';
import { SignupWrapperCss, MainCss, TitleCss } from '../components/Signup/index.css';

const Signup = memo(function Signup() {
	return (
		<SignupWrapperCss>
			<MainCss>
				<TitleCss>Sign-up</TitleCss>

				<SignupForm />
			</MainCss>
		</SignupWrapperCss>
	);
});

export default Signup;
