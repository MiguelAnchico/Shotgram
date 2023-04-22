import { useScreenSize } from '../../hooks/useScreenSize';
import { LinkMobile } from '../../Components/Configuraciones/LinkMobile/LinkMobile';
import { LinkDesktop } from '../../Components/Configuraciones/LinkDesktop/LinkDesktop';

import './Configuraciones.css';

export const Configuraciones = () => {
	const { width } = useScreenSize();

	return (
		<div className='Configuraciones'>
			{width > 900 ? (
				<>
					<LinkDesktop />
					<h2 className='title-lg color-logo-light'>
						Por favor seleccione una opcion del submenu
					</h2>
				</>
			) : (
				<LinkMobile />
			)}
		</div>
	);
};
