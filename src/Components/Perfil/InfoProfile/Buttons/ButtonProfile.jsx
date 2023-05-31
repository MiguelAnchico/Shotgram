import { Link } from 'react-router-dom';
import './Button.css';

export const ButtonProfile = () => {
	return (
		<>
			<Link>
				<button className='title-md rosa buttonBlank'>Compartir</button>
			</Link>
			<Link to='/configuraciones/perfil/'>
				<button className='title-md buttonLogo'>Editar</button>
			</Link>
		</>
	);
};
