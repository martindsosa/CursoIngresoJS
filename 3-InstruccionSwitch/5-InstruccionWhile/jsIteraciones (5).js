function mostrar()
{
    for (var sexo = prompt("ingrese f ó m .") ; sexo != 'm' && sexo != 'f';){
        sexo = prompt("Error.Reingrese f o m ");
    }

document.getElementById('Sexo').value=sexo;

}