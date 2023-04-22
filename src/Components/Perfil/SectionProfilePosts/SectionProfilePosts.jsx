import React from 'react';
import './SectionProfilePosts.css';

export const SectionProfilePosts = ({ posts }) => {
	return (
		<div className='SectionProfilePosts'>
			{posts?.map(({ imagen, idPublicacion }) => (
				<div className='SectionProfilePosts_post' key={idPublicacion}>
					<img src={imagen} />
				</div>
			))}
		</div>
	);
};
