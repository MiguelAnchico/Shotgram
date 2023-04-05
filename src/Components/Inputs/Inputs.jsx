import './Inputs.css';

export const Inputs = ({
	register,
	name,
	label,
	errors,
	required,
	minlength,
	maxlength,
	min,
	max,
	icon,
	type,
}) => {
	return (
		<div className='inputs'>
			<div className='inputs_container'>
				<input
					{...register(name, {
						required: required,
						minLength: minlength,
						maxLength: maxlength,
						min,
						max,
					})}
					autocomplete
					type={type}
					placeholder={label}
					className='body-sm'
				/>
				<img src={icon} />
			</div>
			{errors[name]?.type === 'required' && (
				<span className='body-sm'>El campo es obligatorio</span>
			)}
			{errors[name]?.type === 'minLength' && (
				<span className='body-sm'>
					El campo debe tener como minimo {minlength} de caracteres
				</span>
			)}
			{errors[name]?.type === 'maxLength' && (
				<span className='body-sm'>
					El campo debe tener como maximo {maxlength} de caracteres
				</span>
			)}
			{errors[name]?.type === 'min' && (
				<span className='body-sm'>El valor debe ser mayor o igual a {min}</span>
			)}
			{errors[name]?.type === 'max' && (
				<span className='body-sm'>El valor debe ser mayor o igual a {max}</span>
			)}
		</div>
	);
};
