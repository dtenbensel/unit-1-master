function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

function debugAjax(){
	
	var myData;
	//basic fetch
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json();
		})
        .then(function(response){
            myData = response;

			//check the data
            console.log(myData)

		})

	//check the data
	console.log(myData)

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend','<br>GeoJSON data:</br>' + JSON.stringify(myData))
};

//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
document.addEventListener('DOMContentLoaded',debugAjax)