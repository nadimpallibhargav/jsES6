"use strict"

function getUpdates() {
    var xhttp = new XMLHttpRequest();                               
    xhttp.onreadystatechange = function() {                         
        if (this.readyState == 4 && this.status == 200) {           
        let serverResponse = xhttp.responseText;                 
        console.log(serverResponse);
        }
    };
    xhttp.open("GET", "https://nadimpallibhargav.github.io/jsES6/people.json", true);   
    xhttp.send();                                                   
}

setInterval(getUpdates, 1000);