import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../store/slices/users/thunks';

import searchIcon from '../../../assets/images/buscar.png';

import './BarSearchUser.css';

export const BarSearchUser = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<div className='BarSearchUser'>
			<input type='text' placeholder='Buscar...' />
			<img src={searchIcon} />
		</div>
	);
};
