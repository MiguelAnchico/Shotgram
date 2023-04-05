import './Login.css';

import { InputPassword } from '../../Components/Inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../Components/Inputs/Inputs';

import userIcon from '../../Components/assets/images/user.png';

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
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1000px-Adidas_Logo.svg.png' />
				<h2></h2>
				<p></p>
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
				<a href=''></a>
				<button></button>
			</form>
			<div>
				<p></p>
				<a href=''></a>
			</div>
		</div>
	);
};
