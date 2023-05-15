import { NavLink, useNavigate } from 'react-router-dom';
import './LinkDekstop.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAuth } from '../../../store/slices/auth/AuthSlice';

export const LinkDesktop = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { idUser } = useSelector((state) => state.auth);

	const logout = () => {
		dispatch(logoutAuth());
		navigate('/login');
	};
	return (
		<div className='LinkDekstop'>
			<h3 className='title-lg color-logo'>Configuraciones</h3>
			<nav>
				<NavLink
					to={'/configuraciones/perfil'}
					className={(args) => ` ${args.isActive ? 'title-sm' : 'body-sm'}`}
				>
					Editar Perfil
				</NavLink>
				<NavLink
					className={(args) => ` ${args.isActive ? 'title-sm' : 'body-sm'}`}
					to={'/configuraciones/cuenta'}
				>
					Configurar Cuenta
				</NavLink>
				<span onClick={logout} className='body-sm'>
					Cerrar Sesion
				</span>
			</nav>
			<hr />
		</div>
	);
};
