function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	
	var respuesta = 'si';

	while(respuesta == "si"){
		do {
			num = prompt("Ingrese numero positivo o negativo");
			num = parseInt(num);
		}while(isNaN(num));
		
		if (num >= 0){
			positivo = positivo + num;
		}else{
			negativo = negativo * num;
		}
		respuesta = prompt("Ingresa otro numero ?");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}