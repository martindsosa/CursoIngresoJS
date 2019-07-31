function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= "si";

	while (respuesta == "si"){
		do{
			num = prompt("Ingrese numero ");
			num = parseInt(num);
		}while(isNaN(num));
		acumulador += num;
		contador ++;
		respuesta = prompt ("Desea continuar? ");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}