import users from '../../../../jsons/Users.json';
import { loginAuth } from './AuthSlice';

export const login = ({ user, password }) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json'
		//);

		// Linea a eliminar una vez se conecte con el backend
		const data = users.filter((account) => account.idUsuario == '00000002');
		let confirmCredentials;
		if (data.length > 0) confirmCredentials = data[0].password == 'Passwold';
		if (confirmCredentials)
			dispatch(
				loginAuth({
					id: data[0].idUsuario,
					user: data[0].usuario,
					type: data[0].tipo,
					settings: data[0].configuraciones,
				})
			);
	};
};

export const register = ({ id, user }) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json/user/${user}'
		//);
		// Lineas a eliminar una vez se conecte con el backend

		dispatch(
			loginAuth({
				id: id,
				user: user,
				type: 'usuario',
				settings: {
					private: false,
					adultContent: false,
				},
			})
		);
	};
};

export const logout = () => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json/user/${user}'
		//);
		// Lineas a eliminar una vez se conecte con el backend
	};
};
