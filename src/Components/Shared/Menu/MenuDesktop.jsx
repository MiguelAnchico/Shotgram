import { NavLink } from 'react-router-dom';
import homeIcon from '../../../assets/images/hogar.png';
import favIcon from '../../../assets/images/fav.png';
import searchIcon from '../../../assets/images/buscar.png';
import agregarIcon from '../../../assets/images/agregar.png';
import userIcon from '../../../assets/images/user.png';
import arrowIcon from '../../../assets/images/flecha-angulo-derecho.png';
import settingsIcon from '../../../assets/images/configuraciones.png';

import { useSelector } from 'react-redux';
import './MenuDesktop.css';

import logo from '../../../assets/images/Logo.png';

export const MenuDesktop = () => {
	const { idUser } = useSelector((state) => state.auth);

	return (
		<div className='MenuDesktop'>
			<div className='logo'>
				<img src={logo} />
			</div>
			<h1 className='title-lg color-logo'>Shotgram</h1>
			<NavLink
				to='/home'
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<div>
					<img src={homeIcon} />
					<p className='title-sm'>Home</p>
				</div>
				<img src={arrowIcon} />
			</NavLink>
			<NavLink
				to='/buscador'
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<div>
					<img src={searchIcon} />
					<p className='title-sm'>Buscador</p>
				</div>

				<img src={arrowIcon} />
			</NavLink>
			<NavLink
				to='/agregar'
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<div>
					<img src={agregarIcon} />
					<p className='title-sm'>Agregar post</p>
				</div>
				<img src={arrowIcon} />
			</NavLink>
			<NavLink
				to='/favoritos'
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<div>
					<img src={favIcon} />
					<p className='title-sm'>Favoritos</p>
				</div>
				<img src={arrowIcon} />
			</NavLink>
			<NavLink
				to={'/profile/' + idUser}
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<div>
					<img src={userIcon} />
					<p className='title-sm'>Perfil</p>
				</div>
				<img src={arrowIcon} />
			</NavLink>
			<NavLink
				to={'/configuraciones'}
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<div>
					<img src={settingsIcon} />
					<p className='title-sm'>Configuraciones</p>
				</div>
				<img src={arrowIcon} />
			</NavLink>
		</div>
	);
};
