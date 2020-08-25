import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme /*, darkTheme */ } from './components/Themes';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';
import Router from './router';
import Offline from './components/Offline';
import NewAppVersion from './components/NewAppVersion';
import InstallApp from './components/InstallApp';
import Loader from './components/Loader';
import Test from './components/Test';

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<StoreProvider store={store}>
				<ThemeProvider theme={lightTheme}>
					<GlobalStyles />

					<Test />
					<Router />
					<Offline />
					<InstallApp />
					<NewAppVersion />
				</ThemeProvider>
			</StoreProvider>
		</Suspense>
	);
};

export default App;
