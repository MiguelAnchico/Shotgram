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
				<div className='CardPost-header_profile-details'>
					<h2 className='title-sm'>Camila.Martinez</h2>
					<span class='color-black-op4 body-sm'>Hace 1 hora</span>
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
				<div className='interaccion-counter color-black-op4 body-sm'>
					
						<span>36 Me gusta</span>
						<span>102 Me gusta</span>
					
				</div>
			</div>
			<div className='CardPost-comments body-sm'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore saepe facere debitis temporibus ut. </p>
         </div>
		</div>
	);
};
