// test problem for sort all car model names into alphabetical order

let inventory = require('./../inventory.js');
let sortCarModelAlphabetically = require('./../problem3.js');

let carModels=sortCarModelAlphabetically(inventory);

//--for print sorted car models
console.log("Car Model Name Sorted by alphabetical order : \n");
for (let i = 0; i < carModels.length; i++) {
   
    console.log(carModels[i]);

}