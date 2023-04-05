import './Login.css';

import { InputPassword } from '../../Components/Inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../Components/Inputs/Inputs';

import userIcon from '../../Components/assets/images/user.png';
import logo from '../../Components/assets/images/logo.png';

export const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div className='login'>
			<div className='login-imagen'>
				<img src={logo} />
				<h2 className='title-lg'>Iniciar Sesión</h2>
				<p className='body-sm'>Nos alegra volver a verte</p>
			</div>
			<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
				<Inputs
					register={register}
					name='name'
					type={'text'}
					label={'Nombre'}
					errors={errors}
					required={true}
					minlength={5}
					icon={userIcon}
				/>
				<InputPassword
					register={register}
					name='Password'
					label={'Contraseña'}
					errors={errors}
					required={true}
					minlength={5}
				/>
				<a href='' className='body-sm'>
					¿Olvidaste la contraseña?
				</a>
				<button className='title-sm'>Iniciar</button>
			</form>
			<div className='login-register'>
				<p className='body-sm'>¿No tienes una cuenta?</p>
				<a href='' className='body-sm'>
					{' '}
					Registrate
				</a>
			</div>
		</div>
	);
};
