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

		const finalPost = {
			idUsuario: data[0].idUsuario,
			nombre: data[0].nombre,
			password: data[0].password,
			correo: data[0].correo,
			usuario: data[0].usuario,
			descripcion: data[0].descripcion,
			seguidores: data[0].seguidores,
			seguidos: data[0].seguidos,
			imagen: data[0].imagen,
			configuraciones: data[0].configuraciones,
			bloqueados: data[0].bloqueados,
			tipo: data[0].tipo,
			post: postsUser,
		};

		if (data.length > 0) dispatch(setUser(finalPost));
	};
};
