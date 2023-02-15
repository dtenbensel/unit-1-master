//Example 3.1...
//define fetch request
function jsAjax(){
    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};
//Example 3.3 Line 10...
//define callback function
function callback(response){

    var myData = response;

    //pass data to another function
    nextFunction(myData);
};

function nextFunction(data){

    console.log(data); //contains response data held by myData in callback
};

//define callback function
function callback(response){

    //tasks using the data go here
    console.log(response)

}

window.onload = jsAjax();