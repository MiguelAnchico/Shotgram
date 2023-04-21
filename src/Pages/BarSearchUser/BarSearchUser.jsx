import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/slices/users/thunks';

export const BarSearchUser = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return <div>BarSearch</div>;
};
