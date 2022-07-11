"use strict"

var xhttp = new XMLHttpRequest();                               /* creates an XMLHttpRequest object */
xhttp.onreadystatechange = function() {                         /* 'onreadystatechange' property specifies a function to be executed every time the status of the XMLHttpRequest object changes */ 
    if (this.readyState == 4 && this.status == 200) {           /* When readyState property is 4 and the status property is 200, the response is ready */
       let serverResponse = xhttp.responseText;                 /* responseText property returns the server response as a text string */
       console.log(serverResponse);
    }
};
xhttp.open("GET", "http://localhost:5502/people.json", true);   /* GET request for the specific JSON file */
xhttp.send();                                                   /* SEND request */