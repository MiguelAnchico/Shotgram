import './CardHighlights.css';
const highlights = [
	{
		imagen:
			'https://www.clasesdeperiodismo.com/wp-content/uploads/2013/01/Captura-de-pantalla-2013-01-23-a-las-22.20.02.png',
		nombre: 'Portafolio',
	},
	{
		imagen:
			'https://i.pinimg.com/originals/89/a2/9f/89a29f24552e04e93f3dc6f28bab8eee.jpg',
		nombre: 'Me gusta',
	},
];

export const CardHighlights = () => {
	return (
		<div
			className={
				highlights.length > 3 ? 'CardHighlights scrollx' : 'CardHighlights'
			}
			style={{
				gridTemplateColumns: 'repeat(' + highlights.length + ', 100px)',
			}}
		>
			{highlights?.map((item) => (
				<div className='CardHighlights-historys'>
					<img src={item.imagen} />
					<p className='body-sm color-black-op4'>{item.nombre}</p>
				</div>
			))}
		</div>
	);
};
