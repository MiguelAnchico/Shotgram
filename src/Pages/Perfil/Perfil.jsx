import React, { useEffect } from 'react';
import './Perfil.css';
import { InfoProfile } from '../../Components/Perfil/InfoProfile/InfoProfile';
import { CardHighlights } from '../../Components/Perfil/CardHighlights/CardHighlights';
import { SectionProfilePosts } from '../../Components/Perfil/SectionProfilePosts/SectionProfilePosts';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/slices/users/thunks';
import { useScreenSize } from '../../hooks/useScreenSize';

export const Perfil = () => {
	const { idUser } = useParams();
	const { user } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const { width } = useScreenSize();

	useEffect(() => {
		dispatch(getUser(idUser));
	}, []);

	return (
		<div className='Perfil' style={width > 900 ? { padding: '32px' } : {}}>
			<InfoProfile
				imageUser={user?.usuario?.imagen}
				name={user?.usuario?.nombre}
				user={user?.usuario?.usuario}
				description={user?.usuario?.descripcion}
				follows={user?.usuario?.seguidos?.length}
				followers={user?.usuario?.seguidores?.length}
				posts={user?.publicaciones?.length}
				idProfile={user?.usuario?.id}
			/>
			<SectionProfilePosts posts={user?.publicaciones} />
		</div>
	);
};
