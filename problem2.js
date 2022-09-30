//-- find last car details in the inventory

function findLastCarDetails(inventory) {
    lastCarIndex = inventory.length - 1;
    let lastCar = {};

    //add last car details from inventory
    lastCar.car_make = inventory[lastCarIndex].car_make;
    lastCar.car_model = inventory[lastCarIndex].car_model;

    return lastCar;
}

module.exports = findLastCarDetails;