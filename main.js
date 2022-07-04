"use strict"

let arg1 = [1,2,3];
let arg2 = [4,5,6];

function test() {
    console.log(arg1 + ',' + arg2);
}

test(...arg1,...arg2);