import React from 'react';
import './SectionProfilePosts.css';
const Post = [
	{
		imagen:
			'https://www.vanguardia.com/binrepository/695x700/0c111/695d477/none/12204/YBES/gal_11_2_VL307694_MG19098975.jpg',
	},
	{
		imagen:
			'https://i.pinimg.com/originals/cd/93/52/cd93525d6d229051e2fb04514a79d047.jpg',
	},
	{
		imagen:
			'https://www.instyle.es/medio/2020/03/08/angela-cremonte_02dfe213_1080x1080.jpeg',
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
			'https://thumbs.dreamstime.com/b/imagen-de-instagram-de-los-pies-de-la-mujer-que-se-relajan-en-la-playa-tropical-43920636.jpg',
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
