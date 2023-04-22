import { SectionPosts } from '../../Components/FavPosts/SectionPosts';
import { MenuSecundario } from '../../Components/Shared/MenuSecundario/MenuSecundario';
import { useScreenSize } from '../../hooks/useScreenSize';

export const FavPosts = () => {
	const { width } = useScreenSize();
	return (
		<div>
			{width < 800 && <MenuSecundario />}
			<SectionPosts />
		</div>
	);
};
