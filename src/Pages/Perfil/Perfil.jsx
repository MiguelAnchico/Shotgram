import React from 'react';
import './Perfil.css';
import { InfoProfile } from '../../Components/Perfil/InfoProfile/InfoProfile';
import { CardHighlights } from '../../Components/Perfil/CardHighlights/CardHighlights';
import { SectionProfilePosts } from '../../Components/Perfil/SectionProfilePosts/SectionProfilePosts';

export const Perfil = () => {
	return (
		<div className='Perfil'>
			<InfoProfile />
			<CardHighlights />
			<SectionProfilePosts />
		</div>
	);
};
