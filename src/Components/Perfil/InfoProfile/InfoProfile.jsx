import './InfoProfile.css';

export const InfoProfile = ({
	imageUser,
	name,
	user,
	description,
	follows,
	followers,
	posts,
}) => {
	return (
		<div className='InfoProfile'>
			<div className='InfoProfile-image'>
				<img src={imageUser} />
			</div>
			<div className='InfoProfile-info'>
				<div className='InfoProfile-info_names'>
					<h3 className='title-md color-logo'>{name}</h3>
					<p className='body-sm color-black-op4' id='gris'>
						{user}
					</p>
				</div>
				<p className='InfoProfile-info_description body-sm color-black'>
					{description}
				</p>
				<div className='InfoProfile-info_stats'>
					<div>
						<h3 className='title-sm color-logo'>{followers}</h3>
						<p className='body-sm color-black-op4'>Seguidores</p>
					</div>
					<div>
						<h3 className='title-sm color-logo'>{follows}</h3>
						<p className='body-sm color-black-op4'>Seguidos</p>
					</div>
					<div>
						<h3 className='title-sm color-logo'>{posts}</h3>
						<p className='body-sm color-black-op4'>Post</p>
					</div>
				</div>
			</div>
			<div className='InfoProfile-Button'>{}</div>
		</div>
	);
};
