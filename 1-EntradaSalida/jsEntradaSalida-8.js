/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //dividendo = divisor * cociente + resto
    // Para averiguar el resto => resto = dividendo / (divisor * cociente)
    var numDividendo;
    var numDivisor;
    var divideUnoDos;

    numDividendo = document.getElementById("numeroDividendo").value;
    numDivisor = document.getElementById("numeroDivisor").value;
    numDividendo = parseInt(numDividendo);
    numDivisor = parseInt(numDivisor);
    //paso de string a number para poder sumar los numeros
    divideUnoDos = numDividendo % numDivisor;
    alert ("El resto es " + divideUnoDos);
}
