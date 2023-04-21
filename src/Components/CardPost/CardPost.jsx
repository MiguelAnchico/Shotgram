import './CardPost.css';
import iconMenu from '../../assets/images/menu-hamburguesa.png';
import iconLike from '../../assets/images/corazon.png';
import iconComment from '../../assets/images/comentario-menos.png';
import iconFav from '../../assets/images/estrella-border.png';

export const CardPost = ({
	imageUser,
	user,
	datePost,
	imagePost,
	description,
	numberOfLikes,
	numberOfComments,
}) => {
	return (
		<div className='CardPost'>
			<div className='CardPost-header'>
				<img src={imageUser} className='CardPost-header_profile' />
				<div className='CardPost-header_profile-details'>
					<h2 className='title-sm'>{user}</h2>
					<span class='color-black-op4 body-sm'>{datePost}</span>
				</div>
				<img src={iconMenu} className='CardPost-header_menu' />
			</div>
			<div className='CardPost-post'>
				<img src={imagePost} />
			</div>
			<div className='CardPost-interaction'>
				<div className='CardPost-interaction_icon-continer'>
					<div className='CardPost-interaction_icon-continer_group'>
						<img src={iconLike} />
						<img src={iconComment} />
					</div>
					<img src={iconFav} />
				</div>
				<div className='interaccion-counter color-black-op4 body-sm'>
					<span>{numberOfLikes} Me gustas</span>
					<span>{numberOfComments} Comentarios</span>
				</div>
			</div>
			<div className='CardPost-comments body-sm'>
				<p>{description}</p>
			</div>
		</div>
	);
};
