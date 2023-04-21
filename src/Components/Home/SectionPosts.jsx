import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/slices/post/thunks';
import { CardPost } from '../CardPost/CardPost';

export const SectionPosts = () => {
	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPosts());
	}, []);

	return (
		<div>
			<CardPost />
		</div>
	);
};
