const { 
    mongerInventory 
} = require("./fishMonger.js")

const chefInventory = (maxFishPrice) => {
    const fishFromMonger = mongerInventory.filter(fish => {
        return fish.price <= maxFishPrice
    })
    // const fishFromMonger = []
    // for (const fish of mongerInventory) {
    //     if (fish.price <= maxFishPrice) {
    //         fishFromMonger.push(fish)
    //     }
    // }
    const halfFishFromMonger = fishFromMonger.map(fish => {
        fish.amount /= 2
        return fish
    })
    
    return halfFishFromMonger
}

const fishMenu = (maxFishPrice) => {
    const fishForMenu = chefInventory(maxFishPrice)
    menuHTML = `
    <h1>Menu</h1>
    <article class="menu">
    `
    const fishMenuStr = fishForMenu.map(
        (fish) => `
        <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>
        `
    )
 
    menuHTML += fishMenuStr.join("")
    menuHTML += `
    </article>
    `
    return menuHTML
}


module.exports = { fishMenu }

   // for (const fish of fishForMenu) {
    //     menuHTML += `
    //     <h2>${fish.species}</h2>
    //     <section class="menu__item">${fish.species} Soup</section>
    //     <section class="menu__item">${fish.species} Sandwich</section>
    //     <section class="menu__item">Grilled ${fish.species}</section>
    //     `
    // }