import React, { memo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { login } from '../../../store/dispatchers/auth';
import Message from '../../Message';
import ERRORS from '../../../constants/errors';
import { isValidEmail } from '../../shared/utils';
import Button from '../../Button';
import { FormWrapperCss, LabelCss, InputWrapperCss, InputCss } from '../../shared/styles.css';
import { ButtonsContainerCss } from './index.css';
import ROUTES from '../../../constants/routes';

const INITIAL_CREDENTIALS = {
	email: '',
	password: ''
};
const INITIAL_ERRORS = {
	...INITIAL_CREDENTIALS,
	server: ''
};

const getErrors = ({ email, password }) => {
	const errors = { ...INITIAL_ERRORS };

	if (!email) errors.email = ERRORS.NO_INPUT;
	else if (!isValidEmail(email)) errors.email = ERRORS.INVALID_INPUT;

	if (!password) errors.password = ERRORS.NO_INPUT;

	return errors;
};

const LoginForm = memo(function LoginForm() {
	const [credentials, setCredentials] = useState({ ...INITIAL_CREDENTIALS });
	const handleChange = useCallback(
		({ target: { name, value } }) =>
			setCredentials((credentials) => ({ ...credentials, [name]: value })),
		[]
	);

	const [errors, setErrors] = useState({ ...INITIAL_ERRORS });
	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			const errors = getErrors(credentials);
			setErrors(errors);
			if (Object.values(errors).filter(Boolean).length) return;

			try {
				const { email, password } = credentials;
				await login({ email, password });
			} catch (error) {
				setErrors((errors) => ({ ...errors, server: error.message }));
			}
		},
		[credentials]
	);

	const userLoading = useSelector(({ auth }) => auth.userLoading);

	return (
		<FormWrapperCss onSubmit={handleSubmit}>
			<InputWrapperCss>
				<LabelCss htmlFor="email">Email</LabelCss>
				<InputCss
					id="email"
					name="email"
					placeholder="Enter your email"
					value={credentials.email}
					onChange={handleChange}
				/>
				<Message active={!!errors.email}>{errors.email}</Message>
			</InputWrapperCss>
			<InputWrapperCss>
				<LabelCss htmlFor="password">Password</LabelCss>
				<InputCss
					id="password"
					name="password"
					type="password"
					placeholder="Enter your password"
					value={credentials.password}
					onChange={handleChange}
				/>
				<Message active={!!errors.password}>{errors.password}</Message>
			</InputWrapperCss>
			<Message active={!!errors.server}>{errors.server}</Message>

			<ButtonsContainerCss>
				<Link to={ROUTES.SIGN_UP}>
					<Button outline type="button">
						Sign-up
					</Button>
				</Link>
				<Button loading={userLoading}>Log-in</Button>
			</ButtonsContainerCss>
		</FormWrapperCss>
	);
});

export default LoginForm;
