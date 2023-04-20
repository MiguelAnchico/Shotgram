import { useNavigate, Link } from 'react-router-dom';

import { Inputs } from '../../Components/Inputs/Inputs';

import logo from '../../assets/images/logo.png';
import { useForm } from 'react-hook-form';

export const Update = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const onSubmit = (data) => navigate('/profile');

	return (
		<div>
			<div className='register-container-imagen'>
				<img src={logo} />
				<h2 className='title-lg color-black'>Actualizar Información</h2>
			</div>
			<form
				className='register-container-form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Inputs
					register={register}
					name='fullname'
					type={'text'}
					label={'Nombre Completo'}
					errors={errors}
					required={true}
					minlength={5}
				/>
				<Inputs
					register={register}
					name='description'
					type={'text'}
					label={'Cuentanos sobre ti'}
					errors={errors}
					required={false}
					minlength={6}
				/>
				<button type='submit' className='title-sm'>
					Registrarse
				</button>
			</form>
			<Link to='/profile' className='body-sm'>
				Saltar
			</Link>
		</div>
	);
};
