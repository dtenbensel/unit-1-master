//initialize function called when script loads
function initialize(){
    cities();
    addEvents();
    clickme();
    debugAjax();
    debugCallback();
};

//Example 2.3 line 6...function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
        
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    //add the table to the div in index.html
    //var mydiv = document.getElementById("mydiv"); (old)
    //mydiv.appendChild(table); (old)
    document.querySelector("#mydiv").appendChild(table);
    //initialize add Columns function within the cities function (references cityPop variable)
    addColumns(cityPop);
};
//Call addColumns (conditional statement to add City size header and Small, medium, large)
	function addColumns(cityPop){
		
		document.querySelectorAll("tr").forEach(function(row, i){
            

			if (i == 0){

				row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
			} else {

				var citySize;

				if (cityPop[i-1].population < 100000){
					citySize = 'Small';

				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium';

				} else {
					citySize = 'Large';
				};
                //debugged from: row.insertAdjacntHTML = '<td' + citySize + '</td>';
				row.insertAdjacentHTML('beforeend','<tr><td>' + citySize + '</td></tr>');
			};
		});
	};
//This function creates an event in which the text color changes upon a "mouseover"
	function addEvents(){
    //added 2 arguments to event listener by moving ) down
    document.querySelector("table").addEventListener("mouseover", function(){
            //THis step is an algorithm for a random color
			var color = "rgb(";

			for (var i=0; i<3; i++){

				var random = Math.round(Math.random() * 255);

				color += random;

				if (i<2){
					color += ",";
				
				} else {
					color += ")";
			};
			document.querySelector("table").style.color = color;
		};

		function clickme(){

			alert('Hey, you clicked me!');
		};
        document.querySelector("table").addEventListener("click", clickme)
		//document.querySelector("table").addEventListener("click"), clickme()
	});
};
//more effecient way of initializing
document.addEventListener('DOMContentLoaded',initialize)

function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve data
    fetch(request, init)
        .then(conversion) //Step 4 convert data to usable form
        .then(callback) //Step 5 Send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();

//**************************************Debugged ajax is below**************************************************************

//Unneccessary?
//function debugCallback(response){
//	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
//};

//define fetch request
function debugAjax(){
	//variable to hold data
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
            //must reference this line within this function
            document.querySelector("#mydiv").insertAdjacentHTML('beforeend','<br>GeoJSON data:</br>' + JSON.stringify(myData))

		})

	//check the data= undefined
	console.log(myData)

	
};

//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
document.addEventListener('DOMContentLoaded',debugAjax)
//Week 4 Activity Complete