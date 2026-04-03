
// for (let i = 0; i < 10; i++) {
//     console.log("node using" ,i)
// }

// console.log(process.argv);

// let args = process.argv;

// for(let i = 2; i < args.length; i++){
//     console.log("hello their - " , args[i]);
// }
//start with 2 cuz 0 and 1 are reserved for node and script.js

let mainObj = require("./math");
console.log(mainObj);
console.log(mainObj.sum(10,20));