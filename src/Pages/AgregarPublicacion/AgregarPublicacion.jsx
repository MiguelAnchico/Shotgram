import React, { useEffect } from 'react';
import { InputResize } from '../../Components/Shared/Inputs/InputResize/InputResize';
import { useForm } from 'react-hook-form';
import { InputImage } from '../../Components/Shared/Inputs/InputImage/InputImage';

import './AgregarPublicacion.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, subidoCompletado } from '../../store/slices/post/thunks';
import { Inputs } from '../../Components/Shared/Inputs/Inputs';

export const AgregarPublicacion = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const dispatch = useDispatch();

	const { idUser } = useSelector((state) => state.auth);
	const { subido } = useSelector((state) => state.posts);

	const onSubmit = (data) => {
		dispatch(
			createPost({
				idCreador: idUser,
				numeroMeGustas: 0,
				descripcion: data.description,
				tags: data.tags,
				filename: data.image[0],
			})
		);
	};

	useEffect(() => {
		if (subido) {
			dispatch(subidoCompletado());
			navigate('/profile/' + idUser);
		}
	}, [subido]);

	return (
		<div className='AgregarPublicacion'>
			<h3 className='title-lg color-logo'>Agregar publicacion</h3>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='AgregarPublicacion-form'
			>
				<InputImage
					errors={errors}
					register={register}
					text={'Agregar Publicacion'}
					type={'rectangle'}
					watch={watch}
				/>
				<InputResize errors={errors} register={register} />
				<Inputs
					register={register}
					name='tags'
					label='Etiquetas'
					errors={errors}
					required={true}
					min={2}
					max={12}
					type='text'
				/>
				<button className='title-sm'> Agregar Publicacion</button>
			</form>
		</div>
	);
};
