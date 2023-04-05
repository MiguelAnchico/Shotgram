import React from 'react';
import './SectionProfilePosts.css';
const Post = [
	{
		imagen:
			'https://www.clasesdeperiodismo.com/wp-content/uploads/2013/01/Captura-de-pantalla-2013-01-23-a-las-22.20.02.png',
	},
	{
		imagen:
			'https://i.pinimg.com/originals/89/a2/9f/89a29f24552e04e93f3dc6f28bab8eee.jpg',
	},
	{
		imagen:
			'https://www.clasesdeperiodismo.com/wp-content/uploads/2013/01/Captura-de-pantalla-2013-01-23-a-las-22.20.02.png',
	},
	{
		imagen:
			'https://i.pinimg.com/originals/89/a2/9f/89a29f24552e04e93f3dc6f28bab8eee.jpg',
	},
	{
		imagen:
			'https://www.clasesdeperiodismo.com/wp-content/uploads/2013/01/Captura-de-pantalla-2013-01-23-a-las-22.20.02.png',
	},
	{
		imagen:
			'https://i.pinimg.com/originals/89/a2/9f/89a29f24552e04e93f3dc6f28bab8eee.jpg',
	},
];

export const SectionProfilePosts = () => {
	return (
		<div className='SectionProfilePosts'>
			{Post?.map((item) => (
				<div className='SectionProfilePosts_post'>
					<img src={item.imagen} />
				</div>
			))}
		</div>
	);
};
