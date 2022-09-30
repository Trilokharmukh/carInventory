//function to Sort all the car model names into alphabetical order

function sortCarModelAlphabetically(inventory){
    let car_model = [];     //for store car_model form inventory

    for (let i = 0; i < inventory.length; i++) {
        let car_model_name = inventory[i].car_model;

        //for first charcter of each car_model_name is upperCase
        car_model_name = car_model_name.charAt(0).toUpperCase() + car_model_name.substring(1);
        car_model.push(car_model_name);
    }

    return car_model.sort();

}

module.exports = sortCarModelAlphabetically;
