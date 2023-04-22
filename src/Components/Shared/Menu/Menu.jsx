import { useScreenSize } from '../../../hooks/useScreenSize';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';

export const Menu = () => {
	const { width } = useScreenSize();

	return (
		<div className='Menu'>{width > 650 ? <MenuDesktop /> : <MenuMobile />}</div>
	);
};
