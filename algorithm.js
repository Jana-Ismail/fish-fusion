/* FISHING BOAT:
- boat has many fish
- each fish will be stored in an object with a unique 'id' + these properties:
        species: "value",
        weight: numVal,
        price: numVal (between 3.00 & 10.00)
        amount: numVal
    }
- boatInventory is a variable that has a value of a function -- dailyCatch()
    const boatInventory = dailyCatch()
- when 'dailyCatch()' is invoked, its return value will be an array of fish objects,
    which is defined outside the scope of the function
    - This array of fish objects will be called fishInventory

*/

/* We will import the { functionVariable } exported from fishingBoat.js
// Then we will invoke the function
// Then we will define a function in fishMonger.js
// This function will be named mongerInventory
// Its value should be an array of objects


