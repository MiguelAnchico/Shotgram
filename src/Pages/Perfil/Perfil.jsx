import React, { useEffect } from 'react';
import './Perfil.css';
import { InfoProfile } from '../../Components/Perfil/InfoProfile/InfoProfile';
import { CardHighlights } from '../../Components/Perfil/CardHighlights/CardHighlights';
import { SectionProfilePosts } from '../../Components/Perfil/SectionProfilePosts/SectionProfilePosts';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/slices/users/thunks';

export const Perfil = () => {
	const { idUser } = useParams();
	const { user } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser(idUser));
	}, []);

	return (
		<div className='Perfil'>
			<InfoProfile
				imageUser={user.imagen}
				name={user.nombre}
				user={user.usuario}
				description={user.descripcion}
				follows={user.seguidos.length}
				followers={user.seguidores.length}
				posts={user.post.length}
			/>
			<CardHighlights />
			<SectionProfilePosts posts={user.post} />
		</div>
	);
};
