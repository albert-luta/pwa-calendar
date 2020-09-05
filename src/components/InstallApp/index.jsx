import React, { memo, useEffect, useCallback, useRef, useState } from 'react';
import { InstallAppWrapperCss, ContentWrapperCss, ButtonsWrapperCss } from './index.css';
import Button from '../Button';

const LOCAL_STORAGE_INSTALL_APP_TIMEOUT = 'install-app';
const TIMEOUT = 30 * 24 * 60 * 60 * 1000;

const InstallApp = memo(function InstallApp() {
	const deferredPrompt = useRef(null);
	const [showInstallPrompt, setShowInstallPrompt] = useState(false);

	const handleBeforeInstallPrompt = useCallback((e) => {
		// Prevent Chrome 67 and earlier from automatically showing the prompt
		e.preventDefault();
		// Stash the event so it can be triggered later.
		deferredPrompt.current = e;

		const installTimeout =
			JSON.parse(localStorage.getItem(LOCAL_STORAGE_INSTALL_APP_TIMEOUT)) ?? 0;
		if (Date.now() >= installTimeout) {
			// Update UI notify the user they can add to home screen
			setShowInstallPrompt(true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

		return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
	}, [handleBeforeInstallPrompt]);

	const handleInstallApp = useCallback(() => {
		// hide our user interface that shows our A2HS button
		setShowInstallPrompt(false);
		// Show the prompt
		deferredPrompt.current.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.current.userChoice.then((/* choiceResult */) => {
			// if (choiceResult.outcome === 'accepted') {
			// 	console.log('User accepted the A2HS prompt');
			// } else {
			// 	console.log('User dismissed the A2HS prompt');
			// }

			deferredPrompt.current = null;
		});
	}, []);
	const handleMaybeLater = useCallback(() => {
		localStorage.setItem(LOCAL_STORAGE_INSTALL_APP_TIMEOUT, Date.now() + TIMEOUT);
		setShowInstallPrompt(false);
	}, []);
	const handleDontShowAgain = useCallback(() => {
		localStorage.setItem(LOCAL_STORAGE_INSTALL_APP_TIMEOUT, Infinity);
		setShowInstallPrompt(false);
	}, []);

	return (
		<InstallAppWrapperCss active={showInstallPrompt}>
			<ContentWrapperCss>
				<h3>Install the app</h3>
				<p>
					This app is a pwa, you can install it on any device you want and use it from
					your homescreen as a regular app.
				</p>
				<p>You will not have to search for the website anymore.</p>
			</ContentWrapperCss>
			<ButtonsWrapperCss>
				<Button type="button" noIcon onClick={handleInstallApp}>
					Install
				</Button>
				<Button type="button" noIcon onClick={handleMaybeLater}>
					Maybe later
				</Button>
				<Button type="button" noIcon onClick={handleDontShowAgain}>
					Don't show me this again
				</Button>
			</ButtonsWrapperCss>
		</InstallAppWrapperCss>
	);
});

export default InstallApp;
