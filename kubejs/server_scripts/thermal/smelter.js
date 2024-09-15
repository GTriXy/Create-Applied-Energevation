ServerEvents.recipes(event => {
    //末影锭
    event.remove({ id: 'thermal:enderium_dust_2' })
    event.remove({ output: 'thermal:enderium_ingot' })
    event.recipes.thermal.smelter('2x thermal:enderium_ingot',['kubejs:colorless_compound','6x minecraft:sculk','2x thermal:lead_ingot'])
    //红石通量单元
    event.remove({ output: 'thermal:energy_cell' })
    event.recipes.thermal.smelter('thermal:energy_cell',['3x thermal:enderium_ingot','4x minecraft:redstone_block','thermal:energy_cell_frame'])

})