import { useState } from 'react';
import userDefaults from '../../../assets/images/userDefault.jpg';

import './InputImage.css';

export const InputImage = () => {
	const [imgPreview, setImgPreview] = useState(userDefaults);

	return (
		<div className='InputImage'>
			<div className='InputImage-container_image'>
				<img src={imgPreview} />
			</div>
			<label className='body-sm color-logo-light'>
				<input
					type='file'
					accept='image/png, image/jpeg'
					onChange={(e) =>
						setImgPreview(URL.createObjectURL(e.target.files[0]))
					}
				/>
				Cambiar Foto
			</label>
		</div>
	);
};
