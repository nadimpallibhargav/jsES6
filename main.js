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

myPromise.then((successMessage) => {
    console.log(`the promise was ${successMessage}`);
}).catch((failedMessage) => {
    console.log(`the promise was ${failedMessage}`);
})