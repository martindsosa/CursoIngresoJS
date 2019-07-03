/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numUno;
    var numDos;
    var sumUnoDos;

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    //paso de string a number para poder sumar los numeros
    sumUnoDos = numUno + numDos;

    alert("La suma de los numeros es: " + sumUnoDos);
 
}

