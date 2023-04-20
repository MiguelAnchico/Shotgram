import { useState } from 'react';

import eyeIcon from '../../../assets/images/eye.png';
import closeEyeIcon from '../../../assets/images/closed-eyes.png';

import './InputPassword.css';

export const InputPassword = ({
	register,
	name,
	label,
	errors,
	required,
	minlength,
	watch,
	passwordToValidate,
}) => {
	const [show, setShow] = useState(true);
	return (
		<div className='input-password'>
			<div className='input-password_container'>
				<input
					{...register(name, {
						required: required,
						minLength: minlength,
						validate: (val) => {
							if (watch && watch(passwordToValidate) != val) {
								return 'Tu contraseña no coincide';
							}
						},
					})}
					autocomplete
					type={show ? 'password' : 'text'}
					placeholder={label}
					className='body-sm'
				/>
				<img
					src={show ? eyeIcon : closeEyeIcon}
					onClick={(e) => setShow(!show)}
				/>
			</div>
			{errors[name]?.type === 'required' && (
				<span className='body-sm'>El campo es obligatorio</span>
			)}
			{errors[name]?.type === 'minLength' && (
				<span className='body-sm'>
					El campo debe tener como minimo {minlength} de caracteres
				</span>
			)}
			{errors[name]?.type === 'validate' && (
				<span className='body-sm'>Las contraseñas no coinciden</span>
			)}
		</div>
	);
};
