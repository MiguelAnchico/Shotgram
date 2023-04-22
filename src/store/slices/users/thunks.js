import { setUser, setUsers } from './usersSlice';
import users from '../../../../jsons/Users.json';
import posts from '../../../../jsons/Publicaciones.json';

export const getUsers = () => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json'
		//);

		// Linea a eliminar una vez se conecte con el backend
		const data = users;

		dispatch(setUsers(data));
	};
};
export const getUser = (user) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json/user/${user}'
		//);

		// Lineas a eliminar una vez se conecte con el backend
		let data = users.filter((account) => account.idUsuario == user);
		const postsUser = posts.filter(
			(post) => post.idCreador == data[0]['idUsuario']
		);
		data = [...data];
		data[0]['post'] = postsUser;

		if (data.length > 0) dispatch(setUser(data[0]));
	};
};
