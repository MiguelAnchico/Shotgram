import { useNavigate, Link } from 'react-router-dom';

import { InputPassword } from '../../Components/Inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../Components/Inputs/Inputs';

import userIcon from '../../assets/images/user.png';
import logo from '../../assets/images/logo.png';

import './Login.css';

export const Login = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => navigate('/home');

	return (
		<div className='login'>
			<div className='login-container'>
				<div className='login-container-imagen'>
					<img src={logo} />
					<h2 className='title-lg color-black'>Iniciar Sesión</h2>
					<p className='body-sm color-black'>Nos alegra volver a verte</p>
				</div>
				<form
					className='login-container-form'
					onSubmit={handleSubmit(onSubmit)}
				>
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
					<Link href='' className='body-sm'>
						¿Olvidaste la contraseña?
					</Link>
					<button type='submit' className='title-sm'>
						Iniciar
					</button>
				</form>
				<div className='login-container-register'>
					<p className='body-sm'>¿No tienes una cuenta?</p>
					<Link to='/register' className='body-sm'>
						Registrate
					</Link>
				</div>
			</div>
		</div>
	);
};
