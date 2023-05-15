import React from 'react';
import { InputResize } from '../../Components/Shared/Inputs/InputResize/InputResize';
import { useForm } from 'react-hook-form';
import { InputImage } from '../../Components/Shared/Inputs/InputImage/InputImage';

import './AgregarPublicacion.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useSelector } from 'react-redux';

export const AgregarPublicacion = () => {
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
		<div className='AgregarPublicacion'>
			<h3 className='title-lg color-logo'>Agregar publicacion</h3>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='AgregarPublicacion-form'
			>
				<InputImage text={'Agregar Publicacion'} type={'rectangle'} />
				<InputResize errors={errors} register={register} />
				<button className='title-sm'> Agregar Publicacion</button>
			</form>
		</div>
	);
};
