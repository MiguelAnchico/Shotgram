import React from 'react';
import './ConfiguracionMenu.css';

export const ConfiguracionMenu = () => {
	return (
		<>
			<div className='back-icon'>
				<img src='src/assets/images/back-arrow-icon.png' alt='' />
			</div>
			<div className='ConfiguracionMenu'>
				<h2 className='ConfiguracionMenu-title'>
					<span>Configuración</span>
					<span>perfil</span>
				</h2>
				<div className='input-button'>
					<div className='input-button-container'>
						<img
							src='src/assets/images/user.png'
							alt=''
							className='input-button-icon'
						/>
						<span>Editar Perfil</span>
					</div>
					<img
						src='src/assets/images/fordward-arrow-icon.png'
						alt=''
						className='input-button-icon-forward'
					/>
				</div>
				<button className='input-button'>hola</button>
				<button></button>
				<button></button>
			</div>
		</>
	);
};
