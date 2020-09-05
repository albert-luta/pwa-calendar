import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import { OfflineBarCss } from './index.css';

const Offline = memo(function Offline() {
	const timeout = useRef(null);
	const [isOffline, setIsOffline] = useState(false);

	const handleConnectionChange = useCallback(() => {
		clearTimeout(timeout.current);
		const condition = navigator.onLine ? 'online' : 'offline';
		if (condition === 'online') {
			const webPing = setInterval(async () => {
				try {
					await fetch('//google.com', {
						mode: 'no-cors'
					});
					setIsOffline(false);
					clearInterval(webPing);
				} catch (error) {
					setIsOffline(true);
				}
			}, 2000);
		} else timeout.current = setTimeout(() => setIsOffline(true), 2000);
	}, []);

	useEffect(() => {
		window.addEventListener('online', handleConnectionChange);
		window.addEventListener('offline', handleConnectionChange);

		return () => {
			window.removeEventListener('online', handleConnectionChange);
			window.removeEventListener('offline', handleConnectionChange);
		};
	}, [handleConnectionChange]);

	useEffect(() => () => clearTimeout(timeout.current), []);

	if (!isOffline) return null;
	return (
		<OfflineBarCss>
			<p>
				Oops, it looks like you are not connected. Your changes will not take effect until
				you get a stable internet connection.
			</p>
		</OfflineBarCss>
	);
});

export default Offline;
