function mostrar()
{
    var planeta = prompt("Ingrese planeta del sistema solar");

    switch(planeta){
        case "tierra":{
            alert ("aca vivimos");
            break;
        }
        case "venus":
        case "mercurio":{
            alert("aca hace mas calor");
            break;
        }
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":{
            alert("aca hace mas frio");
            break;
        }
        default:
            alert("este planeta no es valido");
            break;
    }

}
