import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';
import Test from './components/Test';

const App = () => {
	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyles />

				<Test />
			</ThemeProvider>
		</StoreProvider>
	);
};

export default App;
