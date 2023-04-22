import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './slices/users/usersSlice';
import { postSlice } from './slices/post/postsSlice';
import { authSlice } from './slices/auth/AuthSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		users: usersSlice.reducer,
		posts: postSlice.reducer,
	},
});
