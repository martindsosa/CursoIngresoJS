/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numSueldo;
    var resultado;

    numSueldo = document.getElementById("sueldo").value;
    numSueldo = parseInt(numSueldo);
    resultado = (numSueldo * 10) / 100;
    //resultado = numsueldo * 0.1 para sacar el 10 %
    resultado = resultado + numSueldo;
    document.getElementById("resultado").value = resultado;
	
}
