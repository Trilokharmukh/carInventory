//function to return array form car inventory which containing car year

function allCarYear(inventory) {
    let carYear = [];

    for (let i = 0; i < inventory.length; i++){
        carYear.push(inventory[i].car_year);
    }

    return carYear;
}

module.exports = allCarYear;
