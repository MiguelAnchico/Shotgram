import { useScreenSize } from '../../../hooks/useScreenSize';
import { MenuMobile } from './MenuMobile';

export const Menu = () => {
	const { width } = useScreenSize();

	return <div className='Menu'>{width > 500 ? <></> : <MenuMobile />}</div>;
};
