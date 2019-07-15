/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioProductoUno;
var precioProductoDos;
var precioProductoTres;

function Sumar () 
{
    var sumaProductos;

    precioProductoUno = document.getElementById("PrecioUno").value;
    precioProductoDos = document.getElementById("PrecioDos").value;
    precioProductoTres = document.getElementById("PrecioTres").value;
    precioProductoUno = parseInt(precioProductoUno);
    precioProductoDos = parseInt(precioProductoDos);
    precioProductoTres = parseInt(precioProductoTres);
    sumaProductos = precioProductoUno + precioProductoDos + precioProductoTres;
    
    alert ("La suma total de los tres productos es : " + sumaProductos);
    
}

function Promedio () 
{
    var precioPromedio;
        
    precioProductoUno = document.getElementById("PrecioUno").value;
    precioProductoDos = document.getElementById("PrecioDos").value;
    precioProductoTres = document.getElementById("PrecioTres").value;
    precioProductoUno = parseInt(precioProductoUno);
    precioProductoDos = parseInt(precioProductoDos);
    precioProductoTres = parseInt(precioProductoTres);
    precioPromedio = (precioProductoUno + precioProductoDos + precioProductoTres)/3;

    alert ("El precio promedio de los tres productos es : " + precioPromedio);
	
}
function PrecioFinal () 
{
    var precioFinal;
    
    precioProductoUno = document.getElementById("PrecioUno").value;
    precioProductoDos = document.getElementById("PrecioDos").value;
    precioProductoTres = document.getElementById("PrecioTres").value;
    precioProductoUno = parseInt(precioProductoUno);
    precioProductoDos = parseInt(precioProductoDos);
    precioProductoTres = parseInt(precioProductoTres);

    precioFinal = (precioProductoUno + precioProductoDos + precioProductoTres) * 1.21;

    alert("El precio final con iva es : " + precioFinal);

}