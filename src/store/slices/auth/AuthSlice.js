import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		idUser: '',
		user: '',
		type: '',
		settings: {
			private: false,
			adultContent: false,
		},
		logged: false,
	},
	reducers: {
		loginAuth: (state, action) => {
			state.idUser = action.payload.id;
			state.user = action.payload.user;
			state.type = action.payload.type;
			//state.settings = action.payload.settings;
			localStorage.setItem('token', action.payload.token);
			state.logged = true;
		},
		registerAuth: (state, action) => {
			state.idUser = action.payload.id;
			state.user = action.payload.user;
			state.type = action.payload.type;
			//state.settings = action.payload.settings;
			state.logged = true;
		},
		logoutAuth: (state) => {
			state.idUser = '';
			state.user = '';
			state.type = '';
			//state.settings = '';
			state.logged = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { loginAuth, registerAuth, logoutAuth } = authSlice.actions;
