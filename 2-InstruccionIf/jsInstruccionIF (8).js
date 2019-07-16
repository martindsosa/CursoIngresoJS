function mostrar()
{
    var laEdad = document.getElementById("edad").value;
    laEdad = parseInt(laEdad);
    if (laEdad >= 18){
        var elEstadoCivil = document.getElementById("estadoCivil").value;
        if (elEstadoCivil == "Soltero"){
            alert ("Es soltero y no es menor");
        }

    }
    

	


}//FIN DE LA FUNCIÓN