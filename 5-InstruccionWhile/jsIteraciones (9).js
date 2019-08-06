function mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var respuesta= "s";
	var primera = true;

	
	do{
		num = parseInt(prompt("Ingrese el numero"));			
		while(isNaN(num)){
			num = parseInt(prompt("Eso no es un numero.Reingrese el numero"));
		}

		if (primera == true || num > max){
			max = num;
		}
		if (primera == true || num < min){
			min = num;
			primera = false;
		}	
		respuesta = prompt ("Desea ingresar otro numero?");
	}while(respuesta == "s");
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN