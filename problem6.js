let inventory = require('./inventory');

function findBMWAndAudiCars(inventory){
    let BMWAndAudi = [];
    let audiCount = 0;      //it will be help to store audi car in sequence

    for(let index=0; index<inventory.length; index++){
        if(inventory[index].car_make === "Audi"){
            BMWAndAudi.splice(audiCount,0,inventory[index]); //
            audiCount++;
        }
        if(inventory[index].car_make === "BMW"){
            BMWAndAudi.push(inventory[index])
        }
    }

    return BMWAndAudi;
}

module.exports = findBMWAndAudiCars;
