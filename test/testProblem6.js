// this module display BMW and Audi cars from inventory

let inventory = require('./../inventory')
let findBMWAndAudiCars = require('./../problem6');

let BMWAndAudiCars = findBMWAndAudiCars(inventory);  // get BMW and Audi cars details
console.log("BMW and Audi cars : \n");

console.log(JSON.stringify(BMWAndAudiCars));
