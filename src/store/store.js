import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './slices/users/users';

export const store = configureStore({
	reducer: {
		//posts: postSlice.reducer,
		//auth: authSlice.reducer,
		users: usersSlice.reducer,
	},
});
