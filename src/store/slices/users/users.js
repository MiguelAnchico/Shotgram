import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
	},
	reducers: {
		increment: (state /* action */) => {
			state.counter += 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment } = usersSlice.actions;
