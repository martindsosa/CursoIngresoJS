function mostrar()
{
    var nota;
    var sexo;
    var acumNotas = 0;
    var primeraVez = 0;
    var notaBaja;
    var sexoNotaBaja;
    var promNotas = 0;
    var contVaronesMayoresSeis = 0;

    for (var i=1; i <= 5 ; i++){
        nota = parseInt(prompt("Ingrese nota: "));
        while(isNaN(nota) || nota < 0 || nota > 10 ){
            nota = parseInt(prompt("Error. Reingrese nota: "));
        }
        sexo = prompt("Ingrese el sexo: f/m");
        while (sexo != "f" && sexo != "m"){
            sexo = prompt("Error.Reingrese el sexo: f/m");
        }
                  
        if (primeraVez == 0){
            notaBaja = nota;
            sexoNotaBaja = sexo;
            primeraVez = 1;
        }
        if (nota < notaBaja ){
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }
        acumNotas = acumNotas + nota;

        if (sexo == "m" && nota >= 6){
            contVaronesMayoresSeis++;
        }

    }
    promNotas = acumNotas / i;
    console.log ("El promedio de las notas totales es : "+ promNotas);
    console.log ("La nota mas baja es : " + notaBaja + " y el sexo de esa persona es " + sexoNotaBaja);
    console.log ("Cantidad de varones mayores o iguales a 6: " + contVaronesMayoresSeis);
}
