import './Test.css';
import { Login } from '../../Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../../store/slices/users/thunks';
import { useEffect } from 'react';
import { getAllPosts } from '../../store/slices/post/thunks';

export const Testpagemiguel = () => {
	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getAllPosts());
	}, []);

	const ejecutarPrueba = () => {
		dispatch(getUser('00000002'));
	};

	return (
		<div className='Testpagemiguel'>
			<Login />
			{posts?.map((post) => (
				<img src={post.imagen} />
			))}

			<button onClick={ejecutarPrueba}>Prueba</button>
		</div>
	);
};
