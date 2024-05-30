"use strict";
//------------------------------------------------------> LOOPS <-------------------------------------------------------------------------
// if we want to repeat same task multiple time we use loop
// FOR LOOp
let a = 0;
for (let count = 1; count < 10; count++) {
    console.log("Hello World");
}
let num = 11;
const printTable = (num) => {
    for (let i = 1; i <= 10; i++)
        console.log(`${num} * ${i} = ${num * i}`);
};
