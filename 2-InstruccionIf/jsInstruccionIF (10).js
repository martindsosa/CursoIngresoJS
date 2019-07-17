function mostrar()
{
	var notaExamen = Math.round(Math.random() * (10 - 1) + 1);
	alert("NOTA DEL EXAMEN  " + notaExamen);
	notaExamen = parseInt(notaExamen);

	if (notaExamen == 10 || notaExamen == 9)
	{
		alert ("EXCELENTE ");
	}
	else if (notaExamen >= 4){
		alert ("APROBO");
	}else
		alert ("Vamos la proxima se puede");
}