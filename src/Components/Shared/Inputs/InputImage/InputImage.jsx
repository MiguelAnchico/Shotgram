import { useEffect, useState } from 'react';
import userDefaults from '../../../../assets/images/userDefault.jpg';

import './InputImage.css';

export const InputImage = ({ text, type, register, watch }) => {
	const [imgPreview, setImgPreview] = useState(userDefaults);

	useEffect(() => {
		if (watch('image') && watch('image').length != 0)
			setImgPreview(URL.createObjectURL(watch('image')[0]));
	}, [watch('image')]);

	return (
		<div className='InputImage'>
			<div
				className={
					type == 'circle'
						? 'InputImage-container_image-circle'
						: 'InputImage-container_image-rectangle'
				}
			>
				<img src={imgPreview} />
			</div>
			<label className='body-sm color-logo-light'>
				<input
					type='file'
					accept='image/png, image/jpeg'
					{...register('image', {
						required: true,
					})}
				/>
				{text}
			</label>
		</div>
	);
};
