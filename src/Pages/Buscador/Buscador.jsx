import { CardSearchUser } from '../../Components/Buscador/CardSearchUser/CardSearchUser';
import { BarSearchUser } from '../../Components/Buscador/BarSearchUser/BarSearchUser';
import './Buscador.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const Buscador = () => {
	const [list, setList] = useState([]);
	const { users } = useSelector((state) => state.users);

	useEffect(() => {
		setList(users);
	}, [users]);

	return (
		<div className='Buscador'>
			<BarSearchUser list={setList} />
			<div className='buscador-resultados'>
				{list?.map((user) => (
					<CardSearchUser
						url={user.imagen}
						name={user.nombre}
						user={user.usuario}
						idUser={user.id}
					/>
				))}
			</div>
		</div>
	);
};
