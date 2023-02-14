    //Added at Example 3.5 line 44...
    //get the div id
    var theid = document.querySelector('#myDiv').getAttribute('id');

    //theid is 'myDiv'; add it as text to the div
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend',theid);

    //add the class 'foo' to the div
    document.querySelector('#myDiv').setAttribute('class', 'foo');

    //Check your work with the Inspector!