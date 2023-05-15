import { NavLink, useLocation } from 'react-router-dom';
import homeIcon from '../../../assets/images/hogar.png';
import favIcon from '../../../assets/images/fav.png';
import searchIcon from '../../../assets/images/buscar.png';
import agregarIcon from '../../../assets/images/agregar.png';
import userIcon from '../../../assets/images/user.png';

import './MenuMobile.css';
import { useSelector } from 'react-redux';

export const MenuMobile = () => {
	const { idUser } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.users);
	const { pathname } = useLocation();

	return (
		<div className='MenuMobile'>
			<NavLink
				to='/home'
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<img src={homeIcon} />
			</NavLink>
			<NavLink
				to='/buscador'
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<img src={searchIcon} />
			</NavLink>
			<NavLink
				to='/agregar'
				className={(args) =>
					` ${args.isActive ? 'imageMain active' : 'imageMain'}`
				}
			>
				<img src={agregarIcon} />
			</NavLink>
			<NavLink
				to='/favoritos'
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<img src={favIcon} />
			</NavLink>
			<NavLink
				to={'/profile/' + idUser}
				isActive={() => ['/profile/' + user?.idUsuario].includes(pathname)}
				className={(args) => ` ${args.isActive ? 'active' : ''}`}
			>
				<img src={userIcon} />
			</NavLink>
		</div>
	);
};
