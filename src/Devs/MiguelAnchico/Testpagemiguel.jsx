import './Test.css';
import { Login } from '../../Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/slices/users/thunks';

export const Testpagemiguel = () => {
	const { users } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const ejecutarPrueba = () => {
		dispatch(getUsers());
	};

	return (
		<div className='Testpagemiguel'>
			<Login />
			<button onClick={ejecutarPrueba}>Prueba</button>
		</div>
	);
};
