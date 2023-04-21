import './Test.css';
import { Login } from '../../Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../../store/slices/users/thunks';
import { useEffect } from 'react';
import { getAllPosts } from '../../store/slices/post/thunks';
import { DateFormatter } from '../../utils/DateFormatter';
import { SectionPosts } from '../../Components/Home/SectionPosts';

export const Testpagemiguel = () => {
	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getAllPosts());
	}, []);

	const ejecutarPrueba = () => {
		console.log(DateFormatter(posts[0]?.fechaPublicacion));
	};

	return (
		<div className='Testpagemiguel'>
			<Login />
			<SectionPosts />

			<button onClick={ejecutarPrueba}>Prueba</button>
		</div>
	);
};
