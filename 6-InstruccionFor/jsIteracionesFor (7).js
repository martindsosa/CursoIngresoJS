function mostrar()
{
    var contDivisores = 0;
    var num = parseInt(prompt("ingrese un número "));

    for( var i= 1;i <= num  ; i++){

        if ( num % i == 0){
            console.log(i);
            contDivisores++;
        }
    }

    console.log("Cantidad de divisores " + contDivisores);
}