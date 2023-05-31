import users from '../../../../jsons/Users.json';
import axios from 'axios';
import { loginAuth } from './AuthSlice';
import { useNavigate } from 'react-router-dom';

export const login = ({ user, password }) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch

		const data = await axios
			.post('https://shotgrambackend-production.up.railway.app/api/auth/', {
				user,
				password,
			})
			.then(({ data }) => {
				if (data.ok) {
					return data;
				}
				throw new Error('Something went wrong');
			});

		// Linea a eliminar una vez se conecte con el backend
		dispatch(
			loginAuth({
				id: data.usuario.id,
				user: data.usuario.usuario,
				type: data.usuario.tipo,
				settings: data.usuario.configuraciones,
				token: data.token,
			})
		);
	};
};

export const register = ({ id, user }) => {
	return async (dispatch, getState) => {
		// Estructura de peticion fetch
		const data = await axios
			.post('https://shotgrambackend-production.up.railway.app/api/auth/new', {
				user,
				password,
			})
			.then(({ data }) => {
				if (data.ok) {
					return data;
				}
				throw new Error('Something went wrong');
			});
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
		dispatch(logoutAuth());
	};
};
