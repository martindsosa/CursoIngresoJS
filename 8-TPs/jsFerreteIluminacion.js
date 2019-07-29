/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var descuento;
    //var descuentoSobrePrecio;
    var cantidadLamparas = document.getElementById("Cantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    var precioSinDescuento = 35 * cantidadLamparas;

    if (cantidadLamparas >= 6 ){
    
        descuento = precioSinDescuento * 0.5;
        precioSinDescuento = precioSinDescuento - descuento;
    }else if(cantidadLamparas == 5){
        var marcaLamparas = document.getElementById("Marca").value;
        if (marcaLamparas == "ArgentinaLuz"){
            descuento = precioSinDescuento * 0.4;
            precioSinDescuento = precioSinDescuento - descuento;
        }
        else{
            descuento = precioSinDescuento * 0.3;
            precioSinDescuento = precioSinDescuento - descuento;
        }
    }else if (cantidadLamparas == 4){
        var marcaLamparas = document.getElementById("Marca").value;
        if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"){
            descuento = precioSinDescuento * 0.25;
            precioSinDescuento = precioSinDescuento - descuento;
        }
        else{
            descuento = precioSinDescuento * 0.20; 
            precioSinDescuento = precioSinDescuento - descuento;
        }
    }else if (cantidadLamparas == 3){
        var marcaLamparas = document.getElementById("Marca").value;
        if (marcaLamparas == "ArgentinaLuz"){
            descuento = precioSinDescuento * 0.15;
            precioSinDescuento = precioSinDescuento - descuento;
        }
        else if(marcaLamparas == "FelipeLamparas"){
            descuento = precioSinDescuento * 0.10;
            precioSinDescuento = precioSinDescuento - descuento;
        }
        else{
            descuento = precioSinDescuento * 0.05; 
            precioSinDescuento = precioSinDescuento - descuento;
        }
    }
    if (precioSinDescuento > 120){
        var ingresoBruto = precioSinDescuento * 0.1;
        precioSinDescuento = precioSinDescuento + ingresoBruto;
        alert ("IIBB Usted pago " + ingresoBruto);
    }
    document.getElementById("precioDescuento").value = precioSinDescuento;
}
