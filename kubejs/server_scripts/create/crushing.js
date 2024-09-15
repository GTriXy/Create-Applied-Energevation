ServerEvents.recipes(event => {
    event.recipes.create.crushing(Item.of('create:crushing_wheel'),'create:crushing_wheel')
    //黑曜石粉末
    event.recipes.create.crushing([Item.of('create:powdered_obsidian'),Item.of('create:powdered_obsidian').withChance(0.5)],'minecraft:obsidian')
})