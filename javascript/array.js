let arr = ["bmw" , "toyota" , "ferrari"];
arr.push("audi");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift("Bugati");
console.log(arr);

console.log(arr.unshift());

console.log(arr.indexOf("toyota"));
console.log(arr.includes("ferrari"));

let arr2 = ["bmw" , "toyota" , "ferrari"];  
console.log(arr.concat(arr2));

console.log(arr.reverse());

console.log(arr.slice(1,2));   // 1 is included and 2 is excluded

console.log(arr.splice(1,2));  // 1 is included and 2 is excluded

console.log(arr.splice(1,2,"Bugati" , "Audi"));  // 1 is included and 2 is excluded 

let str = ["bmw" , "toyota" , "ferrari"];
let num = [100,42,90,32,22,40];

console.log(str.sort());
console.log(num.sort());//
