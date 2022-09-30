// display car detail of input id
const readline = require("readline-sync");
let problem1 = require('./../problem1.js');
let inventory = require('./../inventory.js');

let carId = Number(readline.question()) 

let carDetail = problem1(inventory, carId);  
console.log(carDetail); 