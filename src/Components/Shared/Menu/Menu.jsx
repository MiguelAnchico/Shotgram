import { useLocation } from 'react-router-dom';
import { useScreenSize } from '../../../hooks/useScreenSize';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';

export const Menu = () => {
	const { width } = useScreenSize();
	let location = useLocation();

	return (
		<div className='Menu'>
			{location.pathname != '/register' ? (
				width > 650 ? (
					<MenuDesktop />
				) : (
					<MenuMobile />
				)
			) : (
				<></>
			)}
		</div>
	);
};
