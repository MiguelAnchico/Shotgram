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
			state.settings = action.payload.settings;
			state.logged = true;
		},
		registerAuth: (state, action) => {
			state.idUser = action.payload.id;
			state.user = action.payload.user;
			state.type = action.payload.type;
			state.settings = action.payload.settings;
			state.logged = true;
		},
	},
});

// Action creators are generated for each case reducer function
export const { loginAuth } = authSlice.actions;
