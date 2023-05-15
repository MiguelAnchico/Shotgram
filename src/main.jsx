import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { AppRoutes } from './routes/AppRoutes';
import { UserRoutes } from './routes/UserRoutes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<BrowserRouter>
				<AppRoutes />
				<div className='main'>
					<Menu />
					<div className='main-content'>
						<UserRoutes />
						<Routes>
							<Route path='/miguel' element={<Testpagemiguel />} />
							<Route path='/milton' element={<Testpagemilton />} />
							<Route path='/shelton' element={<Testpageshelton />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</Provider>
);
