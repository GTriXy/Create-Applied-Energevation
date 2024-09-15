ServerEvents.recipes(event => {
    //硬化木板
    event.recipes.create.filling('tfmg:hardened_planks', [Fluid.of('thermal:creosote',125), '#minecraft:planks'])
})