var vendas;

window.onload = function () {

	// var url = "http://gumball.wickedlysmart.com/";
	// var request = new XMLHttpRequest();
	// request.open("GET", url);
	// request.onload = function(){
	// 	if(request.status == 200) {
	// 		updateSales(request.responseText);
	// 	}
	// };

	// request.send(null);

	// setInterval(refreshHandler,3000); 

}

function refreshHandler() {
	alert("Oi");
}

// ComXMLHTTPRequest:

// function updateSales(responseText) {
// 	salesDiv = document.getElementById("sales");
// 	var sales = JSON.parse(responseText);

// 	for (var i=0; i < sales.length; i++){
// 		var div = document.createElement("div");
// 		div.setAttribute("class","saleItem");
// 		div.innerHTML = sales[i].name + " vendeu " + sales[i].sales + " gumballs.";
// 		salesDiv.appendChild(div);
// 	}

// Com JSONP:

	function updateSales(sales) {
		vendas = sales;
		salesDiv = document.getElementById("sales");

		if (salesDiv != null){
			for (var i=0; i < sales.length; i++){
				var div = document.createElement("div");
				div.setAttribute("class","saleItem");
				div.innerHTML = sales[i].name + " vendeu " + sales[i].sales + " gumballs.";
				salesDiv.appendChild(div);
			}
		}
	}
