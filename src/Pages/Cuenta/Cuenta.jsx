import { Link, useNavigate } from 'react-router-dom';
import { LinkDesktop } from '../../Components/Configuraciones/LinkDesktop/LinkDesktop';
import { useScreenSize } from '../../hooks/useScreenSize';

import arrowLeftIcon from '../../assets/images/back-arrow-icon.png';
import phoneIcon from '../../assets/images/telefono.png';

import { Inputs } from '../../Components/Shared/Inputs/Inputs';
import { useForm } from 'react-hook-form';
import { InputPassword } from '../../Components/Shared/Inputs/InputPassword/InputPassword';

import './Cuenta.css';

export const Cuenta = () => {
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
		<div className='cuenta'>
			{width > 900 ? (
				<LinkDesktop />
			) : (
				<div className='cuenta-retroceder'>
					<Link to={'/configuraciones'} className='back-icon'>
						<img src={arrowLeftIcon} alt='' />
					</Link>
					<h3 className='title-md color-logo'>Configurar Cuenta</h3>
				</div>
			)}

			<form onSubmit={handleSubmit(onSubmit)}>
				<Inputs
					register={register}
					name='name'
					type={'text'}
					label={'Nombre completo'}
					errors={errors}
					required={true}
					minlength={5}
					icon={phoneIcon}
				/>
				<button className='title-md'> Actualizar </button>
			</form>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputPassword
					register={register}
					name='password'
					label={'Contraseña'}
					errors={errors}
					required={true}
					minlength={5}
				/>
				<InputPassword
					register={register}
					name='verifyPassword'
					label={'Confirmar Contraseña'}
					errors={errors}
					required={true}
					minlength={5}
					watch={watch}
					passwordToValidate='password'
				/>
				<button className='title-md'> Actualizar </button>
			</form>
		</div>
	);
};
