import { useState } from 'react';

import eyeIcon from '../../assets/images/eye.png';
import closeEyeIcon from '../../assets/images/closed-eyes.png';

import './InputPassword.css';

export const InputPassword = ({
	register,
	name,
	label,
	errors,
	required,
	minlength,
}) => {
	const [show, setShow] = useState(true);
	return (
		<div className='input-password'>
			<div className='input-password_container'>
				<input
					{...register(name, { required: required, minLength: minlength })}
					autocomplete
					type={show ? 'password' : 'text'}
					placeholder={label}
				/>
				<img
					src={show ? eyeIcon : closeEyeIcon}
					onClick={(e) => setShow(!show)}
				/>
			</div>
			{errors[name]?.type === 'required' && (
				<span>El campo es obligatorio</span>
			)}
			{errors[name]?.type === 'minLength' && (
				<span>El campo debe tener como minimo {minlength} de caracteres</span>
			)}
		</div>
	);
};
