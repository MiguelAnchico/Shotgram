import './CardSearchUser.css';

export const CardSearchUser = ({ url, name, user }) => {
	return (
		<div className='CardSearchUser'>
			<img className='CardSearchUser-img' src={url}></img>
			<div>
				<p>{user}</p>
				<p>{name}</p>
			</div>
			<img src='' />
		</div>
	);
};
