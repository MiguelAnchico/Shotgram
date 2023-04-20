import './InfoProfile.css';
import '../../../index.css';

export const InfoProfile = ({}) => {
	return (
		<div className='InfoProfile'>
			<div className='InfoProfile-image'>
				<img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80' />
			</div>
			<div className='InfoProfile-info'>
				<div className='InfoProfile-info_names'>
					<h3 className='title-md color-logo'>Emma Ruiz</h3>
					<p className='body-sm color-black-op4' id='gris'>
						Emmita
					</p>
				</div>
				<p className='InfoProfile-info_description body-sm color-black'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
					distinctio illum libero saepe! Recusandae, alias nostrum eius,
					consequatur ut fuga magnam facilis non cumque, inventore nisi quasi
					pariatur est aut?
				</p>
				<div className='InfoProfile-info_stats'>
					<div>
						<h3 className='title-sm color-logo'>12000</h3>
						<p className='body-sm color-black-op4'>Seguidores</p>
					</div>
					<div>
						<h3 className='title-sm color-logo'>5000</h3>
						<p className='body-sm color-black-op4'>Seguidos</p>
					</div>
					<div>
						<h3 className='title-sm color-logo'>20</h3>
						<p className='body-sm color-black-op4'>Post</p>
					</div>
				</div>
			</div>
			<div className='InfoProfile-Button'>
				<button className='title-md rosa'>Compatir</button>
				<button className='title-md'>Editar</button>
			</div>
		</div>
	);
};
