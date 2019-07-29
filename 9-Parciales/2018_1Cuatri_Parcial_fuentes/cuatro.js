function mostrar()
{
    var resultado;
    var numeroUno = prompt("Ingrese primer numero ","0");
    numeroUno = parseInt(numeroUno);
    var numeroDos = prompt("Ingrese segundo numero ","0");
    numeroDos = parseInt(numeroDos);
    if (numeroUno == numeroDos){
        alert (numeroUno.toString() + numeroDos.toString());
    }else if (numeroUno > numeroDos){
        resultado = numeroUno - numeroDos;
        alert("La resta de los numero es " + resultado);        
    }
    resultado = numeroDos + numeroUno;
    if (resultado > 10){
        alert("la suma es " + resultado + " y supero el 10")
    }
    
}
