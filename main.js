"use strict"

let myPromise = new Promise((resolve, reject) => {

    let promiseStatus = "completed";

    if(promiseStatus == "completed") {
        resolve('SUCCESS');
    }
    else {
        reject('FAILED');
    }

});