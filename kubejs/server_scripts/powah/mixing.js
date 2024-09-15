ServerEvents.recipes(event => {
    //烈焰水晶
    event.recipes.create.mixing(['3x powah:crystal_blazing',Item.of('minecraft:blaze_powder').withChance(0.35)], ['2x #forge:ingots/electrum','3x thermal:rose_gold_ingot','6x minecraft:blaze_rod','2x botania:quartz_blaze']).heated()
    //光伏板
    event.remove({ output: 'powah:photoelectric_pane' })
    event.recipes.create.mixing(['powah:photoelectric_pane',Item.of('powah:photoelectric_pane').withChance(0.4)], ['2x powah:ender_gate_nitro','ae2:quantum_link','2x minecraft:lapis_block','powah:dielectric_paste'])
})