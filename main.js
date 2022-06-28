"use strict"

function testLet(){
    let a = 30;
    if(true) {
        let a = 50;
        console.log(a);
    }

    console.log(a);
}

testLet();

