function mostrar()
{
    var respuesta = "s";
    var contPares = 0;
    var contImpares = 0;
    var contCeros = 0;
    var acumPositivos = 0;
    var acumNegativos = 0;
    var promPositivos = 0;
    var promNegativos = 0;
    var letra;
    var letraMax;
    var letraMin;
    var num;
    var cont = 0;
    var numMax;
    var numMin;

    do{
        letra = (prompt("Ingrese letra "));

        num = parseInt(prompt("Ingrese numero "));
        while(isNaN(num) || num < -100 || num > 100 ){
            num = parseInt(prompt("Error en el numero. Reingrese "));
        }

        if (num == 0){
            contCeros++;
        }else if (num % 2 == 0){
                contPares++;
        }else{
            contImpares++;
        }

        if (num >= 0 ){
            acumPositivos = acumPositivos + num;
        }else{
            acumNegativos = acumNegativos + num;
        }
        if (cont == 0){
            numMax = num;
            letraMax = letra;
            numMin = num;
            letraMin = letra;
        }else{
            if (num > numMax){
                numMax = num;
                letraMax = letra;
            }
            if (num < numMin){
                numMax = num;
                letraMax = letra;
            }
        }
        cont++;

        respuesta = prompt("Desea ingresar otro numero?");

    }while (respuesta == "s");
    console.log ("La cantidad de numeros pares es :" + contPares);
    console.log ("La cantidad de numeros impares es :" + contImpares);
    console.log ("La cantidad de ceros es :" + contCeros);

    promPositivos = acumPositivos / cont;
    promNegativos = acumNegativos / cont;
    console.log ("El promedio de positivos es :" + promPositivos);
    console.log ("El promedio de negativos es :" + promNegativos);

    console.log ("El numero maximo es " + numMax + " y su letra es " + letraMax);
    console.log ("El numero minimo es " + numMin + " y su letra es " + letraMin);
}
