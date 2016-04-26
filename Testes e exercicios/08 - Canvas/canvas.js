window.onload = function() {
	var canvas = document.getElementById("meucanvas");
	if(!canvas.getContext){
		alert("Seu browser não suporta o recurso canvas");
	}else{
		var context = canvas.getContext("2d");
		context.fillRect(10, 10, 100, 100);
	}

	
	
}