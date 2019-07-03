/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numImporte;
    var importeConDescuento;
    var descImporte;

    numImporte = document.getElementById("importe").value;
    numImporte = parseInt(numImporte);
    descImporte = (numImporte * 25) / 100;
    importeConDescuento = numImporte - descImporte;
    document.getElementById("resultado").value = importeConDescuento;
}
