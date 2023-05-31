import React, { useState } from 'react';
import { SectionPosts } from '../../Components/Home/SectionPosts';
import { MenuSecundario } from '../../Components/Shared/MenuSecundario/MenuSecundario';
import { useScreenSize } from '../../hooks/useScreenSize';
import { ListFollows } from '../../Components/Home/ListFollows';
import { useDispatch } from 'react-redux';
import { morePages } from '../../store/slices/post/thunks';

export const Home = () => {
	const { width } = useScreenSize();
	const [counter, setCounter] = useState(2);

	const dispatch = useDispatch();

	const cargarMasPosts = () => {
		dispatch(morePages(counter));
		setCounter(counter + 1);
	};

	return (
		<div>
			{width < 800 && <MenuSecundario />}
			<ListFollows />
			<SectionPosts />
			<button onClick={cargarMasPosts}>Mas posts</button>
		</div>
	);
};
