import { useNavigate, Link } from 'react-router-dom';

import { InputPassword } from '../../Components/Inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../Components/Inputs/Inputs';

import userIcon from '../../assets/images/user.png';
import logo from '../../assets/images/logo.png';

import './Register.css';

export const Register = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const onSubmit = (data) => navigate('/update');

	return (
		<div className='register'>
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
						register={register}
						name='fullname'
						type={'text'}
						label={'Nombre Completo'}
						errors={errors}
						required={true}
						minlength={5}
						icon={userIcon}
					/>
					<Inputs
						register={register}
						name='user'
						type={'text'}
						label={'Usuario'}
						errors={errors}
						required={true}
						minlength={6}
						icon={userIcon}
					/>
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
		</div>
	);
};
