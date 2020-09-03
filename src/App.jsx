import React, { memo, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './components/Themes';
import store from './store';
import Router from './router';
import Offline from './components/Offline';
import NewAppVersion from './components/NewAppVersion';
import InstallApp from './components/InstallApp';
import SplashScreen from './components/SplashScreen';

const AppComponent = memo(function AppComponent() {
	const theme = useSelector(({ settings }) => settings.theme);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />

			<Router />
			<Offline />
			<InstallApp />
			<NewAppVersion />
		</ThemeProvider>
	);
});

const App = () => (
	<Suspense fallback={<SplashScreen />}>
		<StoreProvider store={store}>
			<AppComponent />
		</StoreProvider>
	</Suspense>
);

export default App;
