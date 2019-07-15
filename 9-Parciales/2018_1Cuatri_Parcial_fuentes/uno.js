
function mostrar()
{
    var largoRectangulo;
    var anchoRectangulo;
    var perimetroRectangulo;

    largoRectangulo =  prompt("Ingrese el largo del rectangulo : ");
    anchoRectangulo =  prompt("Ingrese el ancho del rectangulo : ");
    largoRectangulo = parseInt(largoRectangulo);
    anchoRectangulo = parseInt(anchoRectangulo);
    perimetroRectangulo = (largoRectangulo + anchoRectangulo) * 2;

    alert ("El perimetro es : " + perimetroRectangulo);
}
