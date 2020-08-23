import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
		</ThemeProvider>
	);
};

export default App;
