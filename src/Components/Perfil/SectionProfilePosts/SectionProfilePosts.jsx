import React from 'react';
import './SectionProfilePosts.css';

export const SectionProfilePosts = ({ posts }) => {
	return (
		<div className='SectionProfilePosts'>
			{posts?.map(({ imagen }) => (
				<div className='SectionProfilePosts_post'>
					<img src={imagen} />
				</div>
			))}
		</div>
	);
};
