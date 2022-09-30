//-- this module display how many car were made before 2000

let inventory = require('./../inventory')
let allCarYear = require('./../problem4');
let carYearOlderThan2000 = require('./../problem5');


let carYears = allCarYear(inventory);  // it stores all cars year

let olderCarYear2000 = carYearOlderThan2000(carYears); // it store cars year made before 2000

console.log(olderCarYear2000.length + " cars were made before the year 2000 ");

