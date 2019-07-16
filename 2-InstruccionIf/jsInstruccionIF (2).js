function mostrar()
{
    var laEdad = document.getElementById("edad").value;
    laEdad = parseInt(laEdad);
    if (laEdad >= 18){
        alert ("Es mayor de edad");
    }
}