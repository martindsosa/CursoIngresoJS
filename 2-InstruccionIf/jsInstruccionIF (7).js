function mostrar()
{
    var laEdad = document.getElementById("edad").value;
    laEdad = parseInt(laEdad);
    if (laEdad < 18){
        var elEstadoCivil = document.getElementById("estadoCivil").value;

        if (elEstadoCivil == "Casado" || elEstadoCivil == "Divorciado"){
            alert ("Es muy pequeño para NO ser soltero");
        }
    }
}