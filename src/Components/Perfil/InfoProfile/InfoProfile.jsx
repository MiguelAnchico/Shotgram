import { useSelector } from 'react-redux';
import { ButtonOtherProfile } from './Buttons/ButtonOtherProfile';
import { ButtonProfile } from './Buttons/ButtonProfile';
import './InfoProfile.css';
import { useScreenSize } from '../../../hooks/useScreenSize';

export const InfoProfile = ({
	imageUser,
	name,
	user,
	description,
	follows,
	followers,
	posts,
	idProfile,
}) => {
	const { idUser } = useSelector((state) => state.auth);

	const { width } = useScreenSize();

	return (
		<div
			className={width > 900 ? 'InfoProfile InfoProfileMobile' : 'InfoProfile'}
		>
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
			<div className='InfoProfile-Button'>
				{idProfile == idUser ? <ButtonProfile /> : <ButtonOtherProfile />}
			</div>
		</div>
	);
};
