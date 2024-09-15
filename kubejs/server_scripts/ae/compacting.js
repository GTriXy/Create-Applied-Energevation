ServerEvents.recipes(event => {
    //陨石粉
    event.recipes.create.compacting('ae2:sky_dust', ['minecraft:deepslate', Fluid.lava(100), 'ae2:fluix_dust'])
})