import { setUser, setUsers } from './usersSlice';
import users from '../../../../jsons/Users.json';
import posts from '../../../../jsons/Publicaciones.json';
import axios from 'axios';

export const getUsers = (id) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		const data = await axios
			.get('https://shotgrambackend-production.up.railway.app/api/usuarios/', {
				headers: {
					'x-token': localStorage.getItem('token'),
				},
			})
			.then(({ data }) => {
				if (data.ok) {
					return data;
				}
				throw new Error('Something went wrong');
			});

		const users = data.usuarios.filter((user) => user.id != id);

		dispatch(setUsers(users));
	};
};
export const getUser = (user) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		const data = await axios
			.get(
				'https://shotgrambackend-production.up.railway.app/api/usuarios/' +
					user,
				{
					headers: {
						'x-token': localStorage.getItem('token'),
					},
				}
			)
			.then(({ data }) => {
				if (data.ok) {
					return data;
				}
				throw new Error('Something went wrong');
			});

		dispatch(setUser(data));
	};
};
