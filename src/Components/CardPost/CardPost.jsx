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
            <h2>Foto</h2>
         </div>
         <div className='CardPost-interaction'></div>
         <div className='CardPost-comments'></div>
		</div>
	);
};
