import { setUser, setUsers } from './users';
import users from '../../../../jsons/Users.json';

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
		const data = users.filter((account) => account.idUsuario == user);

		if (data.length > 0) dispatch(setUser(data[0]));
	};
};
