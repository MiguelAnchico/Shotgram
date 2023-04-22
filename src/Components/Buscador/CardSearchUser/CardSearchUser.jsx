import { Link } from 'react-router-dom';
import './CardSearchUser.css';

export const CardSearchUser = ({ url, name, user, idUser }) => {
	return (
		<Link to={'/profile/' + idUser} className='CardSearchUser'>
			<img className='CardSearchUser-img' src={url}></img>
			<div className='CardSearchUser-UserDetails'>
				<p className='CardSearchUser-UserDetails-User color-logo'>{user}</p>
				<p className='CardSearchUser-UserDetails-Name color-black-light'>
					{name}
				</p>
			</div>
			<img
				src='src\assets\images\flecha-angulo-derecho.png'
				className='CardSearchUser-icon'
			/>
		</Link>
	);
};
