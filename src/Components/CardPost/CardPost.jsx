import './CardPost.css';

export const CardPost = () => {
	return (
		<div className='CardPost'>
			<div className='CardPost-header'>
				<img
					src='src\Components\CardPost\img\foto-perfil.jpg'
					alt='Imagen de perfil'
					className='CardPost-header_profile'
				/>
				<div>
					<h2>Camila.Martinez</h2>
					<span>Hace 1 hora</span>
				</div>
				<img
					src='src\Components\assets\images\menu-hamburguesa.png'
					alt=''
					className='CardPost-header_menu'
				/>
			</div>
			<div className='CardPost-post'>
				<img src='src\Components\CardPost\img\img-post-1.jpg' alt='' />
			</div>
			<div className='CardPost-interaction'>
				<div className='CardPost-interaction_icon-continer'>
					<div className='CardPost-interaction_icon-continer_group'>
						<img src='src\Components\assets\images\corazon.png' alt='' />
						<img
							src='src\Components\assets\images\comentario-menos.png'
							alt=''
						/>
					</div>
					<img src='src\Components\assets\images\estrella-border.png' alt='' />
				</div>
				<div className='interaccion-counter'>
					
						<span>34 Me gusta</span>
						<span>102 Me gusta</span>
					
				</div>
			</div>
			<div className='CardPost-comments'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore saepe facere debitis temporibus ut. </p>
         </div>
		</div>
	);
};
