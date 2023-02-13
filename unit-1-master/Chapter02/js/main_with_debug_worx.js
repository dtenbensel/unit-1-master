//initialize function called when script loads
function initialize(){
    cities();
    addEvents();
    addColumns();
    clickme();
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

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

    //Example 2.3 line 41...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city; //NOTE DIFFERENT SYNTAX
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population; //NOTE DIFFERENT SYNTAX
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();
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
				row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
			};
		});
	};

	function addEvents(){
    //added 2 arguments to event listener by moving ) down
    document.querySelector("table").addEventListener("mouseover", function(){
        
			var color = "rgb(";

			for (var i=0; i<3; i++){

				var random = Math.round(Math.random() * 255);

				color += random;

				if (i<2){
					color += ",";
				
				} else {
					color += ")";
			};
//
			document.querySelector("table").style.color = color;
		};

		function clickme(){

			alert('Hey, you clicked me!');
		};
        document.querySelector("table").addEventListener("click", clickme)
		//document.querySelector("table").addEventListener("click"), clickme()
	});
};