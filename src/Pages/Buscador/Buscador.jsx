import { CardSearchUser } from '../../Components/Buscador/CardSearchUser/CardSearchUser';
import { BarSearchUser } from '../BarSearchUser/BarSearchUser';
import './Buscador.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../store/slices/users/usersSlice';

export const Buscador = () => {
	const { users } = useSelector((state) => state.users);

	return (
		<div className='Buscador'>
			<div>Menu secundario</div>
			<BarSearchUser />
			<div className='Buscador-resultados.'>
				{users?.map((user) => (
					<CardSearchUser
						url={user.imagen}
						name={user.nombre}
						user={user.usuario}
					/>
				))}
			</div>
			<div>Menu Princial</div>
		</div>
	);
};
