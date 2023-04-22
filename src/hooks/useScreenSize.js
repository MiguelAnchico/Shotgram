import { useEffect, useState } from 'react';

export const useScreenSize = () => {
	const [width, setWidth] = useState();
	const [height, setHeight] = useState();

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	return {
		width,
		height,
	};
};
