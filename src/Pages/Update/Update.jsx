import { useNavigate, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { useForm } from 'react-hook-form';
import banner from '../../assets/images/loginBanner.jpg';

import './Update.css';
import { useScreenSize } from '../../hooks/useScreenSize';
import { InputResize } from '../../Components/Shared/Inputs/InputResize/InputResize';
import { InputImage } from '../../Components/Shared/Inputs/InputImage/InputImage';
import { useSelector } from 'react-redux';

export const Update = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const { idUser } = useSelector((state) => state.auth);

	const { width } = useScreenSize();

	const onSubmit = () => navigate('/profile/' + idUser);

	return (
		<div className={width > 900 ? 'update' : 'update updateMobile'}>
			<div className='update-container'>
				<div className='update-container-imagen'>
					<img src={logo} />
					<h2 className='title-lg color-black'>Actualizar Información</h2>
				</div>
				<form
					className='update-container-form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<InputImage text={'Cambiar Imagen'} type={'circle'} />
					<InputResize errors={errors} register={register} />
					<button type='submit' className='title-sm'>
						Actualizar Perfil
					</button>
				</form>
				<Link to={'/profile/' + idUser} className='body-sm'>
					Saltar
				</Link>
			</div>
			{width > 900 && <img className='update-banner' src={banner} />}
		</div>
	);
};
