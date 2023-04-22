import { CardSearchUser } from '../../Components/Buscador/CardSearchUser/CardSearchUser';
import { BarSearchUser } from '../../Components/Buscador/BarSearchUser/BarSearchUser';
import './Buscador.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../store/slices/users/usersSlice';

export const Buscador = () => {
	const { users } = useSelector((state) => state.users);

	return (
		<div className='Buscador'>
			<BarSearchUser />
			<div className='buscador-resultados'>
				{users?.map((user) => (
					<CardSearchUser
						url={user.imagen}
						name={user.nombre}
						user={user.usuario}
						idUser={user.idUsuario}
					/>
				))}
			</div>
		</div>
	);
};
