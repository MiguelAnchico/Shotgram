import React from 'react';
import { InputResize } from '../../Components/Shared/Inputs/InputResize/InputResize';
import { useForm } from 'react-hook-form';
import { InputImage } from '../../Components/Shared/Inputs/InputImage/InputImage';

import './AgregarPublicacion.css';

export const AgregarPublicacion = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	return (
		<div className='AgregarPublicacion'>
			<h3 className='title-lg color-logo'>Agregar publicacion</h3>
			<InputImage text={'Agregar Publicacion'} type={'rectangle'} />
			<InputResize errors={errors} register={register} />
			<button className='title-sm'> Agregar Publicacion</button>
		</div>
	);
};
