import './Test.css';
import { Login } from '../../Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../../store/slices/users/thunks';
import { useEffect } from 'react';

export const Testpagemiguel = () => {
	const { users } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const ejecutarPrueba = () => {
		dispatch(getUser('Chun.li'));
	};

	return (
		<div className='Testpagemiguel'>
			<Login />

			<button onClick={ejecutarPrueba}>Prueba</button>
		</div>
	);
};
