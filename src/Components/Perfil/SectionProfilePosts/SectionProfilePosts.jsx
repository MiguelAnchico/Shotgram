import React from 'react';
import './SectionProfilePosts.css';

export const SectionProfilePosts = ({ posts }) => {
	return (
		<div className='SectionProfilePosts'>
			{posts?.map(({ contenido, id }) => (
				<div className='SectionProfilePosts_post' key={id}>
					<img src={contenido} />
				</div>
			))}
		</div>
	);
};
