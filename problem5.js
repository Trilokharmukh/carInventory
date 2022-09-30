//This module is find cars who made before year 2000

function carYearOlderThan2000(inventory){
    for(let index = inventory.length; index >=0; index--){    
        if ( inventory[index] >= 2000) { 
            inventory.splice(index, 1);     //remove car year if older than 2000 
        }  
    }
    return inventory;
}

module.exports = carYearOlderThan2000;

