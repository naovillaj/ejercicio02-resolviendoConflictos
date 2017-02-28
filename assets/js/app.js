function imc(){
	var peso = (document.getElementById('peso').value);
	var talla = (document.getElementById('estatura').value);
	if(peso !== "" || talla !== ""){
		alert("El indice de tu masa corporal es : " + (peso / Math.pow(talla,2)).toFixed(2));
	}
	else{
		alert("Error de Datos");
	}
}