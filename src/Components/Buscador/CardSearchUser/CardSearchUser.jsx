export const CardSearchUser = ({ url, name, user }) => {
	return (
		<div>
			<img src={url}></img>
			<div>
				<p>{user}</p>
				<p>{name}</p>
			</div>
			<img src='' />
		</div>
	);
};
