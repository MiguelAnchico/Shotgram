import posts from '../../../../jsons/Publicaciones.json';
import users from '../../../../jsons/Users.json';
import { setPost, setPosts } from './post';

export const getAllPosts = () => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json'
		//);

		// Linea a eliminar una vez se conecte con el backend
		const data = posts;
		const dataUsers = users;

		data?.map((post, index) => {});
		dispatch(setPosts(data));
	};
};
export const getPosts = (idUser) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json'
		//);

		// Linea a eliminar una vez se conecte con el backend
		const data = posts.filter((post) => post.idCreador == idUser);

		dispatch(setPosts(data));
	};
};

export const getPost = (id) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		//const { data } = await fetch(
		//	'https://github.com/MiguelAnchico/Shotgram/blob/5550647d20b261cf9f159db53cb1c48f2f5703e5/jsons/Users.json/user/${user}'
		//);

		// Lineas a eliminar una vez se conecte con el backend
		const data = posts.filter((post) => post.idPublicacion == id);

		if (data.length > 0) dispatch(setPost(data[0]));
	};
};
