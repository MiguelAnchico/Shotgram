import { useNavigate, Link } from 'react-router-dom';

import { InputPassword } from '../../Components/Shared/Inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../Components/Shared/Inputs/Inputs';

import userIcon from '../../assets/images/user.png';
import logo from '../../assets/images/Logo.png';
import banner from '../../assets/images/loginBanner.jpg';

import './Register.css';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useDispatch } from 'react-redux';

import { register } from '../../store/slices/auth/thunks';

export const Register = () => {
	const navigate = useNavigate();
	const {
		register: reg,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(register({ id: '00000002', user: 'Chun.li' }));
		navigate('/update');
	};

	const { width } = useScreenSize();

	return (
		<div className={width > 900 ? 'register' : 'register registerMobile'}>
			<div className='register-container'>
				<div className='register-container-imagen'>
					<img src={logo} />
					<h2 className='title-lg color-black'>Registrate</h2>
					<p className='body-sm color-black'>Empieza tu historia</p>
				</div>
				<form
					className='register-container-form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Inputs
						register={reg}
						name='fullname'
						type={'text'}
						label={'Nombre Completo'}
						errors={errors}
						required={true}
						minlength={5}
						icon={userIcon}
					/>
					<Inputs
						register={reg}
						name='user'
						type={'text'}
						label={'Usuario'}
						errors={errors}
						required={true}
						minlength={6}
						icon={userIcon}
					/>
					<InputPassword
						register={reg}
						name='password'
						label={'Contraseña'}
						errors={errors}
						required={true}
						minlength={5}
					/>
					<InputPassword
						register={reg}
						name='verifyPassword'
						label={'Confirmar Contraseña'}
						errors={errors}
						required={true}
						minlength={5}
						watch={watch}
						passwordToValidate='password'
					/>
					<button type='submit' className='title-sm'>
						Registrarse
					</button>
				</form>
				<div className='register-container-login'>
					<p className='body-sm'>¿Ya tienes una cuenta?</p>
					<Link to='/login' className='body-sm'>
						Inicia sesion
					</Link>
				</div>
			</div>
			{width > 900 && <img className='register-banner' src={banner} />}
		</div>
	);
};
