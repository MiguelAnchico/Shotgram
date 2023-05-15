import React from 'react';
import { SectionPosts } from '../../Components/Home/SectionPosts';
import { MenuSecundario } from '../../Components/Shared/MenuSecundario/MenuSecundario';
import { useScreenSize } from '../../hooks/useScreenSize';
import { ListFollows } from '../../Components/Home/ListFollows';

export const Home = () => {
	const { width } = useScreenSize();

	return (
		<div>
			{width < 800 && <MenuSecundario />}
			<ListFollows />
			<SectionPosts />
		</div>
	);
};
