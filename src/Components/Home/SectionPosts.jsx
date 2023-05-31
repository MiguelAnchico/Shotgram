import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/slices/post/thunks';
import { CardPost } from '../CardPost/CardPost';
import { DateFormatter } from '../../utils/DateFormatter';

import './SectionPosts.css';
import { getUsers } from '../../store/slices/users/thunks';

export const SectionPosts = () => {
	const { posts, page, subido } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getAllPosts(1));
	}, []);

	return (
		<div className='SectionPosts'>
			{posts?.map((post) => (
				<CardPost
					key={post.id}
					id={post.idCreador._id}
					imageUser={post.idCreador.imagen}
					user={post.idCreador.nombre}
					datePost={DateFormatter(post.fechaPublicacion)}
					imagePost={post.contenido}
					description={post.descripcion}
					numberOfLikes={post.numeroMeGustas}
					numberOfComments={post.numeroComentarios}
				/>
			))}
		</div>
	);
};
