export const DateFormatter = (fecha) => {
	const newDate = new Date(fecha);
	const currentDate = new Date().getTime();

	let tiempoDeDiferencia = currentDate - newDate.getTime();

	/*
	let textMes =
		Math.trunc(tiempoTotalEnMinutos / 60 / 24 / 30) > 1 ? ' meses' : ' mes';
	let textDia =
		Math.trunc(tiempoTotalEnMinutos / 60 / 24) > 1 ? ' dias' : ' dia';
	let textHora = Math.trunc(tiempoTotalEnMinutos / 60) > 1 ? ' horas' : ' hora';

	if (Math.trunc(tiempoTotalEnMinutos / 60 / 24 / 30) > 0)
		return 'Hace ' + Math.trunc(tiempoTotalEnMinutos / 60 / 24 / 30) + textMes;
	if (Math.trunc(tiempoTotalEnMinutos / 60 / 24) > 0)
		return 'Hace ' + Math.trunc(tiempoTotalEnMinutos / 60 / 24) + textDia;
	if (Math.trunc(tiempoTotalEnMinutos / 60) > 0)
		return 'Hace ' + Math.trunc(tiempoTotalEnMinutos / 60) + textHora;
    
	return 'Hace ' + tiempoTotalEnMinutos + ' minutos';
    */
	let date = '';

	tiempoDeDiferencia = tiempoDeDiferencia / 1000 / 60;

	switch (true) {
		case tiempoDeDiferencia < 60:
			date = 'Hace ' + Math.floor(tiempoDeDiferencia);
			date += tiempoDeDiferencia > 2 ? ' Minutos' : ' Minuto';
			break;
		case tiempoDeDiferencia < 1440:
			date = 'Hace ' + Math.floor(tiempoDeDiferencia / 60);
			date += tiempoDeDiferencia / 60 > 2 ? ' Horas' : ' Hora';
			break;
		case tiempoDeDiferencia < 43200:
			date = 'Hace ' + Math.floor(tiempoDeDiferencia / 60 / 24);
			date += tiempoDeDiferencia / 60 / 24 > 2 ? ' Dias' : ' Dia';
			break;
		case tiempoDeDiferencia < 518400:
			date = 'Hace ' + Math.floor(tiempoDeDiferencia / 60 / 24 / 30);
			date += tiempoDeDiferencia / 60 / 24 / 30 > 2 ? ' Meses' : ' Mes';
			break;
		case tiempoDeDiferencia > 518400:
			date = 'Hace ' + Math.floor(tiempoDeDiferencia / 60 / 24 / 30 / 12);
			date += tiempoDeDiferencia / 60 / 24 / 30 / 12 > 2 ? ' Años' : ' Año';
			break;
		default:
			date = 'Hace ' + Math.floor(tiempoDeDiferencia);
			date += tiempoDeDiferencia > 2 ? ' Minutos' : ' Minuto';
			break;
	}

	return date;
};
