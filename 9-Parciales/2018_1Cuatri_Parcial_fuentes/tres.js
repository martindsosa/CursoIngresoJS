function mostrar()
{
    var elPrecio;
    var elPorcentaje;
    var precioFinal;

    elPrecio = prompt ("Ingrese el precio : ");
    elPorcentaje = prompt ("Ingrese el porcentaje de descuento : ");
    // calculo el porcentaje de descuento y lo resto al precio ingresado
    precioFinal = (elPorcentaje * elPrecio) / 100;
    precioFinal = elPrecio - precioFinal;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
