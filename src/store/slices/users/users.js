import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		user: {},
	},
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
		},

		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUsers, setUser } = usersSlice.actions;
