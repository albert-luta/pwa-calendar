import React, { memo, useState, useCallback } from 'react';
import { login } from '../store/dispatchers/auth';
import ErrorMessage from '../components/shared/ErrorMessage';
import ERRORS from '../constants/errors';

const INITIAL_CREDENTIALS = {
	email: '',
	password: ''
};
const INITIAL_ERRORS = {
	email: '',
	password: '',
	server: ''
};

const isValidEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
const getErrors = ({ email, password }) => {
	const errors = { ...INITIAL_ERRORS };

	if (!email) errors.email = ERRORS.NO_INPUT;
	else if (!isValidEmail(email)) errors.email = ERRORS.INVALID_INPUT;

	if (!password) errors.password = ERRORS.NO_INPUT;

	return errors;
};

const Login = memo(function Login() {
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

	return (
		<>
			Login
			<form onSubmit={handleSubmit}>
				<input name="email" value={credentials.email} onChange={handleChange} />
				<ErrorMessage active={!!errors.email}>{errors.email}</ErrorMessage>
				<input
					name="password"
					type="password"
					value={credentials.password}
					onChange={handleChange}
				/>
				<ErrorMessage active={!!errors.password}>{errors.password}</ErrorMessage>
				<ErrorMessage active={!!errors.server}>{errors.server}</ErrorMessage>
				<button>Submit</button>
			</form>
		</>
	);
});

export default Login;
