import './LinkMobile.css';

import arrowLeftIcon from '../../../assets/images/back-arrow-icon.png';
import arrowRightIcon from '../../../assets/images/fordward-arrow-icon.png';
import userIcon from '../../../assets/images/user.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const LinkMobile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { idUser } = useSelector((state) => state.auth);

	const logout = () => {
		dispatch(logoutAuth());
		navigate('/login');
	};

	return (
		<div className='LinkMobile'>
			<Link to={'/profile/' + idUser} className='back-icon'>
				<img src={arrowLeftIcon} alt='' />
			</Link>

			<div className='ConfiguracionMenu'>
				<h2 className='ConfiguracionMenu-title'>
					<p>Configuración Perfil</p>
				</h2>

				<NavLink to={'/configuraciones/perfil'} className='input-button'>
					<div className='input-button-container'>
						<img src={userIcon} className='input-button-icon' />
						<span>Editar Perfil</span>
					</div>
					<img src={arrowRightIcon} className='input-button-icon-forward' />
				</NavLink>

				<NavLink to={'/configuraciones/cuenta'} className='input-button'>
					<div className='input-button-container'>
						<img src={userIcon} className='input-button-icon' />
						<span>Configurar Cuenta</span>
					</div>
					<img src={arrowRightIcon} className='input-button-icon-forward' />
				</NavLink>

				<button onClick={logout} className='title-sm'>
					Cerrar Sesion
				</button>
			</div>
		</div>
	);
};
