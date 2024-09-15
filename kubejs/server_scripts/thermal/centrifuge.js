ServerEvents.recipes(event => {
    //热可可（？）
    event.remove({ output: 'farmersdelight:hot_cocoa' })
    event.recipes.thermal.centrifuge('farmersdelight:hot_cocoa', '2x minecraft:cocoa_beans')
})