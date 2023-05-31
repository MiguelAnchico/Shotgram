import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		posts: [],
		post: {},
		subido: false,
		page: 1,
	},
	reducers: {
		setPosts: (state, action) => {
			state.posts = [...state.posts, ...action.payload];
			state.page++;
		},

		setPost: (state, action) => {
			state.post = action.payload;
		},

		setSubiendo: (state, action) => {
			state.subido = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setPosts, setPost, setSubiendo } = postSlice.actions;
