/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
    var numUno;
    var numDos;
    var restaUnoDos;

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    //paso de string a number para poder sumar los numeros
    restaUnoDos = numUno - numDos;

    alert("La resta de los numeros es: " + restaUnoDos);
}

function multiplicar()
{ 
    var numUno;
    var numDos;
    var multiplicaUnoDos;

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    //paso de string a number para poder sumar los numeros
    multiplicaUnoDos = numUno * numDos;

    alert("La multiplicacion de los numeros es: " + multiplicaUnoDos);
}

function dividir()
{
    var numUno;
    var numDos;
    var divideUnoDos;

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    //paso de string a number para poder sumar los numeros
    divideUnoDos = numUno / numDos;

    alert("La division de los numeros es: " + divideUnoDos);
}

