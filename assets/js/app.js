
var imprimir = document.getElementById("imprimir");
var records= document.getElementById('records');

imprimir.onclick = function (){

	var peso = document.getElementById("peso").value;
	var talla = document.getElementById("talla").value;

	var cimc = peso/Math.pow(talla,2);
	alert ("Tu IMC es: "+ cimc.toFixed(2));
}

