const { boatInventory } = require("./fishingBoat.js")

const createMongerInventory = (inventory) => {
    const mongerInventoryArray = boatInventory.filter(fish => fish.price <= 7.50 && fish.amount >= 10)
    // const mongerInventoryArray = []
    // for (const fish of inventory) {
    //     if (fish.price <= 7.50 && fish.amount >= 10) {
    //         mongerInventoryArray.push(fish)
    //         fish.amount = 10
    //     }
    // }
    return mongerInventoryArray
}

const mongerInventory = createMongerInventory(boatInventory)
console.log(mongerInventory)

module.exports = { mongerInventory }