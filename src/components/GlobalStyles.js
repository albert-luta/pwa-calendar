import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	${reset};

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root {
		line-height: 1.4;
		font-family: "Roboto", sans-serif;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		--clr-main: ${({ theme: { colors } }) => colors.main};
		--clr-white: ${({ theme: { colors } }) => colors.white};
		--clr-success: ${({ theme: { colors } }) => colors.success};
		--clr-error: ${({ theme: { colors } }) => colors.error};

		--clr-background: ${({ theme: { colors } }) => colors.background};
		--clr-text: ${({ theme: { colors } }) => colors.text};
		--clr-text-alpha-50: ${({ theme: { colors } }) => colors.textAlpha50};

		--transition-speed: ${({ theme: { transitions } }) => transitions.speeds.normal};
	}

	h1,
	h2,
	h3,
	h4,
	label,
	button {
		font-weight: 500;
	}

	label,
	button {
		cursor: pointer;
		user-select: none;
	}

	h1 {
		font-size: 2.5rem;
	}
	h2 {
		font-size: 1.85rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	h4 {
		font-size: 1.3rem;
	}
	h5,
	small {
		font-size: 0.85rem;
	}
	h6 {
		font-size: 0.7rem;
	}

	button {
		font-size: 1rem;
		background: transparent;
		padding: 0;
		border: none;
		display: block;
		width: 100%;
	}
  `;

export default GlobalStyles;
