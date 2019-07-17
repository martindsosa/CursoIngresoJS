function mostrar()
{
    var laEdad = document.getElementById("edad").value;
    laEdad = parseInt(laEdad);
    if (laEdad >= 18){
        alert ("Es mayor de edad");
    }
    else if (laEdad >= 13 ){
            alert ("Es un adolescente");
    }else
        alert ("Es un niño");
    
}