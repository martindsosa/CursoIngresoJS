/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperaturaEnFahrenheit;
var temperaturaEnCentigrados;
    
function FahrenheitCentigrados () 
{
    temperaturaEnFahrenheit = document.getElementById("Temperatura").value;
    temperaturaEnFahrenheit = parseInt(temperaturaEnFahrenheit);
    // recibo la temperatura en fahernheit y la convierto a centigrados.
    temperaturaEnCentigrados = (((temperaturaEnFahrenheit - 32)*5)/9);

    alert (temperaturaEnFahrenheit + " ° fahrenheit son " + temperaturaEnCentigrados + " ° centigrados");
}

function CentigradosFahrenheit () 
{
    temperaturaEnCentigrados = document.getElementById("Temperatura").value;
    temperaturaEnCentigrados = parseInt(temperaturaEnCentigrados);
    // recibo la temperatura en centigrados y la convierto a fahernheit.
    temperaturaEnFahrenheit = (((temperaturaEnFahrenheit * 9)/5) + 32);

    alert (temperaturaEnCentigrados + " ° centigrados son " + temperaturaEnFahrenheit + " ° fahrenheit");
}
