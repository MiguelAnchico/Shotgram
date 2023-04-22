import { useNavigate, Link } from 'react-router-dom';

import { InputPassword } from '../../Components/Shared/Inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../Components/Shared/Inputs/Inputs';

import userIcon from '../../assets/images/user.png';
import logo from '../../assets/images/logo.png';
import banner from '../../assets/images/loginBanner.jpg';

import './Login.css';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/auth/thunks';

export const Login = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();

	const { width } = useScreenSize();

	const onSubmit = () => {
		dispatch(login({ user: 0, password: 0 }));
		navigate('/home');
	};

	return (
		<div className={width > 900 ? 'login' : 'login loginMobile'}>
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
			{width > 900 && <img className='login-banner' src={banner} />}
		</div>
	);
};
