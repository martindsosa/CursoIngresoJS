function mostrar()
{
	for (var numero = prompt("ingrese un número entre 0 y 10.");numero >= 0 && numero <= 10;){
		numero = prompt("ingrese un numero entre 0 y 10");
		document.getElementById("Numero").value = numero;
	}

}