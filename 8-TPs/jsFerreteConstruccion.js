/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var perimetroTerreno;

    largoTerreno = document.getElementById("Largo").value;
    anchoTerreno =document.getElementById("Ancho").value;
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    //se calcula alambrar el perimetro del terreno con tres hilos.
    perimetroTerreno = 3*(2*(largoTerreno + anchoTerreno));

    alert ("La cantidad de alambre necesaria para alambrar con tres hilos es : " + perimetroTerreno); 

}
function Circulo () 
{
    var radioTerreno;
    var perimetroTerrenoCircular;
    // perimetro de circulo = 2* pi * radio. Como son tres vueltas se multiplica *3
    radioTerreno = document.getElementById("Radio").value;
    radioTerreno = parseInt(radioTerreno);
    perimetroTerrenoCircular = 3 * ( 2 * 3.14 * radioTerreno);
    
    alert ("La cantidad de alambre necesaria para alambrar con tres hilos es : " + perimetroTerrenoCircular); 
    
}
function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var areaTerreno;
    var bolsaCemento;
    var bolsaCal;

    largoTerreno = document.getElementById("Largo").value;
    anchoTerreno =document.getElementById("Ancho").value;
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    
    areaTerreno = (largoTerreno * anchoTerreno);
    bolsaCal = 3 * areaTerreno;
    bolsaCemento = 2 * areaTerreno;
    
    alert ("Cal : " + bolsaCal + " bolsas" + " y cemento : " + bolsaCemento + "bolsas"); 
    
}
