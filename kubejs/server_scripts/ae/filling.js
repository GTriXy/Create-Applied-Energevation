ServerEvents.recipes(event => {
    //硬化木板
    event.remove({ output: 'ae2:quartz_vibrant_glass' })
    event.recipes.create.filling('ae2:quartz_vibrant_glass', [Fluid.of('thermal:refined_fuel',150), 'ae2:quartz_glass'])
})