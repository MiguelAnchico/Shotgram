import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './slices/users/users';
import { postSlice } from './slices/post/post';

export const store = configureStore({
	reducer: {
		//posts: postSlice.reducer,
		//auth: authSlice.reducer,
		users: usersSlice.reducer,
		posts: postSlice.reducer,
	},
});
