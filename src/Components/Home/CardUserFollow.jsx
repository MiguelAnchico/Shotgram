import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './CardUserFollow.css';

export const CardUserFollow = ({ image, user, idUser }) => {
	return (
		<Link to={'/profile/' + idUser} className='CardUserFollow'>
			<div>
				<img src={image} />
			</div>
			<p className='body-sm'>{user}</p>
		</Link>
	);
};
