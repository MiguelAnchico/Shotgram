import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';

import { Testpagemiguel } from './Devs/MiguelAnchico/Testpagemiguel';
import { Testpagemilton } from './Devs/Milton/Testpagemilton';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route path='/miguel' element={<Testpagemiguel />} />
					<Route path='/milton' element={<Testpagemilton />} />
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
