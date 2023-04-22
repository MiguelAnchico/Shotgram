import { Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Register } from '../Pages/Register/Register';
import { Update } from '../Pages/Update/Update';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/update' element={<Update />} />
		</Routes>
	);
};
