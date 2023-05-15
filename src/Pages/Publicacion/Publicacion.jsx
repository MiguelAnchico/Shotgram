import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Publicacion.css';

export const Publicacion = () => {
	const publi = {
		idPublicacion: '87752-EP7',
		fechaPublicacion: '2021-03-21T04:10:13.551Z',
		idCreador: '00000001',
		nombreCreador: 'juan.carlos',
		numeroMeGustas: 3,
		numeroComentarios: 4,
		descripcion:
			'Que opinan de mi ultimo trabajo? Me ha costado dos semanas pulirlo pero por fin he acabado',
		imagen:
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80',
		imagen2:
			'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
	};

	const { posts } = useSelector((state) => state.posts);
	return (
		<>
			<div className='Publicacion'>
				<img src={publi.imagen} alt='' className='Publicacion-img' />
				<div className='Publicacion-userContainer'>
					<img
						src={publi.imagen2}
						alt=''
						className='Publicacion-userContainer-img'
					/>
					<div className='Publicacion-userContainer-data color-logo'>
						<div className='Publicacion-userContainer-data-user'>
							<p>{publi.nombreCreador}</p>
						</div>
					</div>
					<button className='Publicacion-userContainer-button'>Seguir</button>
				</div>
				<div className='Publicacion-descripcion .color-black'>
					<p>{publi.descripcion}</p>
				</div>
			</div>
		</>
	);
};
