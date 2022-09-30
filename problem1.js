// find car details of passing id

function problem1(inventory, carId) {

    let result = [];

    if(inventory==undefined || carId == undefined ){
        return result
    }

    if(Array.isArray(inventory)==false){
        return result
    }

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === carId) {
            return inventory[i];
            
        }
    }
    return result;
}

module.exports = problem1;