import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/slices/post/thunks';
import { CardPost } from '../CardPost/CardPost';
import { DateFormatter } from '../../utils/DateFormatter';

import './SectionPosts.css';
import { getUsers } from '../../store/slices/users/thunks';

export const SectionPosts = () => {
	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getAllPosts());
	}, []);

	return (
		<div className='SectionPosts'>
			{posts?.map((post) => (
				<CardPost
					key={post.idPublicacion}
					imageUser={post.imagenUsuario}
					user={post.nombreCreador}
					datePost={DateFormatter(post.fechaPublicacion)}
					imagePost={post.imagen}
					description={post.descripcion}
					numberOfLikes={post.numeroMeGustas}
					numberOfComments={post.numeroComentarios}
				/>
			))}
		</div>
	);
};
