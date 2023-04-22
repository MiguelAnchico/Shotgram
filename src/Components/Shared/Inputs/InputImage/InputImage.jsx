import { useState } from 'react';
import userDefaults from '../../../../assets/images/userDefault.jpg';

import './InputImage.css';

export const InputImage = ({ text, type }) => {
	const [imgPreview, setImgPreview] = useState(userDefaults);

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
					onChange={(e) =>
						setImgPreview(URL.createObjectURL(e.target.files[0]))
					}
				/>
				{text}
			</label>
		</div>
	);
};
