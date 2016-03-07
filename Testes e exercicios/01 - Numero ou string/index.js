function init() {
	var numOrString1 = "3"+"7";
	var numOrString2 = "3"*"4";
	var primeiroParagrafo = document.getElementById("1");
	var segundoParagrafo = document.getElementById("2");

	primeiroParagrafo.innerHTML = numOrString1;
	segundoParagrafo.innerHTML = numOrString2;
}


window.onload = init;
