function mostrar()
{
    var acumPeso = 0;
    var marca;
    var respuesta = "s";
    var peso;
    var pesoMax;
    var pesoMin;
    var temp;
    var contPares = 0;
    var cont = 0;
    var marcaMasPesado;
    var masPesado;
    var contMenosCero = 0;
    var promPesos = 0;

    do{
        cont ++;        //para saber la cantidad de productos ingresados.
        marca = prompt("Ingrese la marca del producto ");

        peso = parseInt(prompt("Ingrese el peso "));
        while(isNaN(peso) || peso < 1 || peso > 100 ){
            peso = parseInt(prompt("Error en el numero. Reingrese el peso "));
        }

        temp = parseInt(prompt ("Ingrese temperatura de almacenamiento"));
        while(isNaN(temp) || temp < -30 || temp > 30 ){
            temp = parseInt(prompt ("ERROR. Reingrese temperatura de almacenamiento"));
        }

        if (temp % 2 == 0){
            contPares++;
        }
        if (cont == 1){
            marcaMasPesado = marca;
            masPesado = peso;
            pesoMax = peso;
            pesoMin = peso;
        }else{
            if (peso < masPesado){
                marcaMasPesado = marca;
                pesoMax = peso;
            }else if( peso < pesoMin){
                pesoMin = peso;
            }
        }

        if (temp < 0){
            contMenosCero++;
        }
        acumPeso = acumPeso + peso;             

    }while(respuesta == "s")
    
    promPesos = acumPeso / cont;
    document.write("La cantidad de temperaturas pares " + contPares +"<br>");
    document.write("La marca del producto mas pesado " + marcaMasPesado +"<br>");
    document.write("La cantidad de productos que se conservan a menos de cero grado " + contMenosCero +"<br>");
    document.write("El promedio del peso de todos los productos " + promPesos +"<br>");
    document.write("El peso maximo " + pesoMax +"<br>");
    document.write("El peso minimo " + pesoMin +"<br>");

}
