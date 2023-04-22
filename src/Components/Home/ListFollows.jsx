import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/slices/users/thunks';
import { CardUserFollow } from './CardUserFollow';

import './ListFollows.css';

export const ListFollows = () => {
	const { users } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<div
			className={users.length > 3 ? 'ListFollows scrollx' : 'ListFollows'}
			style={{
				gridTemplateColumns: 'repeat(' + users.length + ', 100px)',
			}}
		>
			{users?.map((user) => (
				<CardUserFollow
					image={user?.imagen}
					user={user?.usuario}
					idUser={user?.idUsuario}
					key={user?.idUsuario}
				/>
			))}
		</div>
	);
};
