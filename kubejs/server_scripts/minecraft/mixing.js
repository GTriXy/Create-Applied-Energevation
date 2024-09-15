ServerEvents.recipes(event => {
    //火焰弹
    event.remove({ output: 'minecraft:fire_charge' })
    event.recipes.create.mixing([Item.of('minecraft:fire_charge',2)], ['2x minecraft:gunpowder','minecraft:blaze_powder','#minecraft:coals','botania:mana_powder']).heated()
})