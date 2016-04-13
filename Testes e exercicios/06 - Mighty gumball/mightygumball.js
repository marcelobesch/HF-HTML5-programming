var vendas;
var lastReportTime = 0;

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

	setInterval(refreshHandler,3000); 

}

function refreshHandler() {
	
	var url = "http://gumball.wickedlysmart.com?callback=updateSales" 
	+ "&lastreporttime=" + lastReportTime 
	+ "&random=" + (new Date()).getTime();

	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	newScriptElement.setAttribute("id", "jsonp");

	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null) {
		head.appendChild(newScriptElement);
	}else{
		head.replaceChild(newScriptElement, oldScriptElement);
	}

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
		
		// vendas = sales;
		salesDiv = document.getElementById("sales");

		if (salesDiv != null){
			for (var i=0; i < sales.length; i++){
					//if(lastReportTime < sales[i].time){
						var div = document.createElement("div");
						div.setAttribute("class","saleItem");
						div.innerHTML = sales[i].name + " vendeu " + sales[i].sales + " gumballs.";
						salesDiv.appendChild(div);
						// lastReportTime = sales[i].time;
				//}
			}

			if(sales.length > 0){
				lastReportTime = sales[sales.length-1].time;
			}
		}
		

	}
