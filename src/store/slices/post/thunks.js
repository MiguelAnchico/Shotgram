import axios from 'axios';
import posts from '../../../../jsons/Publicaciones.json';
import { setPost, setPosts, setSubiendo } from './postsSlice';

export const getAllPosts = () => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		dispatch(setSubiendo(true));
		const data = await axios
			.get(
				'https://shotgrambackend-production.up.railway.app/api/publicaciones?page=',
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

		dispatch(setPosts(data.publicaciones.docs));
	};
};

export const morePages = (page) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		dispatch(setSubiendo(true));
		const data = await axios
			.get(
				'https://shotgrambackend-production.up.railway.app/api/publicaciones?page=' +
					page,
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

		dispatch(setPosts(data.publicaciones.docs));
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

export const createPost = (info) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		await axios
			.post(
				'https://shotgrambackend-production.up.railway.app/api/publicaciones/',
				info,
				{
					headers: {
						'x-token': localStorage.getItem('token'),
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			.then(({ data }) => {
				if (data.ok) {
					return data;
				}
				throw new Error('Something went wrong');
			});

		dispatch(setSubiendo(true));
	};
};

export const subidoCompletado = () => {
	return async (dispatch, getState) => {
		dispatch(setSubiendo(false));
	};
};
