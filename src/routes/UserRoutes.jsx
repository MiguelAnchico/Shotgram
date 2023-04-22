import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { Buscador } from '../Pages/Buscador/Buscador';
import { Perfil } from '../Pages/Perfil/Perfil';
import { Home } from '../Pages/Home/Home';
import { FavPosts } from '../Pages/FavPosts/FavPosts';
import { AgregarPublicacion } from '../Pages/AgregarPublicacion/AgregarPublicacion';

export const UserRoutes = () => {
	const { logged } = useSelector((state) => state.auth);
	return (
		<Routes>
			{logged ? (
				<>
					<Route path='/buscador' element={<Buscador />} />
					<Route path='/favoritos' element={<FavPosts />} />
					<Route path='/agregar' element={<AgregarPublicacion />} />
					<Route path='/profile/:idUser' element={<Perfil />} />
					<Route path='/home' element={<Home />} />
				</>
			) : (
				<Route
					path='/*'
					element={
						<>
							Error 403 no tienes una sesion abierta <br />
							<Link to='/login'> Iniciar Sesion</Link>
						</>
					}
				></Route>
			)}
		</Routes>
	);
};
