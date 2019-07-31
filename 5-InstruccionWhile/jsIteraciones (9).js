function mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var respuesta='si';
	var primera = true;

	while(respuesta!='no')
	{
		do{
			num = prompt("Ingrese el numero");
			num =parseInt(num);
		}while(isNaN(num));
		if (primera == true){
			max = num;
			min = num;
			primera = false;
		}
		if (num > max){
			max = num;
		}	
		if (num < min){
			min = num;
		}
	}
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN