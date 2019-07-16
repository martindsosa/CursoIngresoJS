function mostrar()
{ 
    var laEdad = document.getElementById("edad").value;
    laEdad = parseInt(laEdad);
    
    if (!(laEdad >= 13 && laEdad <= 17)){
       alert ("NO Es un adolescente");
    
    }


}