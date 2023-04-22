import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';

import { Testpagemiguel } from './Devs/MiguelAnchico/Testpagemiguel';
import { Testpagemilton } from './Devs/Milton/Testpagemilton';
import { Testpageshelton } from './Devs/Shelton/Testpageshelton';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { Update } from './Pages/Update/Update';
import { Perfil } from './Pages/Perfil/Perfil';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Home } from './Pages/Home/Home';
import { Menu } from './Components/Shared/Menu/Menu';
import { Buscador } from './Pages/Buscador/Buscador';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<BrowserRouter>
				<div className='main'>
					<Menu />
					<Routes>
						<Route path='/miguel' element={<Testpagemiguel />} />
						<Route path='/milton' element={<Testpagemilton />} />
						<Route path='/shelton' element={<Testpageshelton />} />

						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/update' element={<Update />} />
						<Route path='/buscador' element={<Buscador />} />
						<Route path='/favoritos' element={<Buscador />} />
						<Route path='/profile/:idUser' element={<Perfil />} />
						<Route path='/home' element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</Provider>
);
