import React from 'react';
import { useScreenSize } from '../../hooks/useScreenSize';
import { LinkDesktop } from '../../Components/Configuraciones/LinkDesktop/LinkDesktop';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../Components/Shared/Inputs/Inputs';
import { InputResize } from '../../Components/Shared/Inputs/InputResize/InputResize';
import userIcon from '../../assets/images/user.png';
import arrowLeftIcon from '../../assets/images/back-arrow-icon.png';

import './EditPerfil.css';
import { InputImage } from '../../Components/Shared/Inputs/InputImage/InputImage';
import { Link, useNavigate } from 'react-router-dom';

export const EditPerfil = () => {
	const { width } = useScreenSize();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const onSubmit = () => {
		navigate('/home');
	};

	return (
		<div className='EditPerfil'>
			{width > 900 ? (
				<LinkDesktop />
			) : (
				<div className='EditPerfil-retroceder'>
					<Link to={'/configuraciones'} className='back-icon'>
						<img src={arrowLeftIcon} alt='' />
					</Link>
					<h3 className='title-md color-logo'>Editar Perfil</h3>
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputImage
					text={'Cambiar Imagen'}
					register={register}
					watch={watch}
					type={'circle'}
				/>
				<Inputs
					register={register}
					name='name'
					type={'text'}
					label={'Nombre completo'}
					errors={errors}
					required={true}
					minlength={5}
					icon={userIcon}
				/>
				<Inputs
					register={register}
					name='name'
					type={'text'}
					label={'Nombre de usuario'}
					errors={errors}
					required={true}
					minlength={5}
					icon={userIcon}
				/>
				<InputResize errors={errors} register={register} />
				<button className='title-md'> Actualizar </button>
			</form>
		</div>
	);
};
