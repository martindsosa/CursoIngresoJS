function mostrar()
{
    var contPares = 0;
    var num;

    num = parseInt(prompt("Ingrese un numero "));
    for( var i= 1;i <= num  ; i++){

        if ( i % 2 == 0){
            console.log(i);
            contPares++;
        }
    }

    console.log("Cantidad de numeros pares " + contPares);



}//FIN DE LA FUNCIÓN