import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/slices/users/thunks';

import searchIcon from '../../../assets/images/buscar.png';

import './BarSearchUser.css';

export const BarSearchUser = ({ list }) => {
	const dispatch = useDispatch();

	const { idUser } = useSelector((state) => state.auth);
	const { users } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(getUsers(idUser));
	}, []);

	const filterList = (palabra) => {
		if (palabra) {
			const arreglo = users;
			const umbral = 2;

			let resultados = [];
			for (let i = 0; i < arreglo.length; i++) {
				let elemento = arreglo[i];
				let contadorSimilitud = 0;

				for (let j = 0; j < palabra.length; j++) {
					if (palabra[j].toLowerCase() === elemento.usuario[j].toLowerCase()) {
						contadorSimilitud++;
					}
				}

				if (contadorSimilitud >= umbral) {
					resultados.push(elemento);
				}
			}
			list(resultados);
		} else {
			list(users);
		}
	};

	return (
		<div className='BarSearchUser'>
			<input
				onChange={(e) => {
					filterList(e.target.value);
				}}
				type='text'
				placeholder='Buscar...'
			/>
			<img src={searchIcon} />
		</div>
	);
};
