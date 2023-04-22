import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		posts: [],
		post: {},
	},
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload;
		},

		setPost: (state, action) => {
			state.post = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setPosts, setPost } = postSlice.actions;
