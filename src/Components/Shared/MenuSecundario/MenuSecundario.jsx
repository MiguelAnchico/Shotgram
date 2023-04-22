import settingIcon from '../../../assets/images/configuraciones.png';
import chatIcon from '../../../assets/images/chat.png';

import './MenuSecundario.css';
import { useScreenSize } from '../../../hooks/useScreenSize';
import { Link } from 'react-router-dom';

export const MenuSecundario = () => {
	const { width } = useScreenSize();
	return (
		<div
			className={
				width < 650 ? 'MenuSecundario MenuSecundarioMobile' : 'MenuSecundario'
			}
		>
			<h3 className='title-md color-logo'>Shotgram</h3>
			<div>
				<img src={chatIcon} />
				<Link to='/configuraciones'>
					<img src={settingIcon} />
				</Link>
			</div>
		</div>
	);
};
