import './InputResize.css';

export const InputResize = ({ errors, register }) => {
	const resizeTextArea = (e) => {
		e.target.style.height = 0;
		if (e.target.scrollHeight < 200) {
			e.target.style.height = e.target.scrollHeight - 32 + 'px';
		} else {
			e.target.style.height = '200px';
		}
	};

	return (
		<div className='inputResize'>
			<textarea
				type='text'
				name='description'
				{...register('description', {
					required: true,
					minLength: 2,
				})}
				placeholder='Agrega un comentario'
				className='body-sm'
				onChange={resizeTextArea}
			/>
			{errors['description']?.type === 'minLength' && (
				<span className='body-sm'>
					El campo debe tener como minimo 2 caracteres
				</span>
			)}
		</div>
	);
};
