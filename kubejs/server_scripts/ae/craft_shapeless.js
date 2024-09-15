ServerEvents.recipes(event => {
    //存储总线
    event.remove({ output: 'ae2:storage_bus' })
    event.shapeless(
        Item.of('ae2:storage_bus'), 
        [
          'minecraft:piston',
          'minecraft:sticky_piston',
          '#forge:chests/wooden'
        ]
    )
    //me终端
    event.remove({ output: 'ae2:terminal' })
    event.shapeless(
        Item.of('ae2:terminal'), 
        [
          '#ae2:illuminated_panel',
          'ae2:export_bus',
          'ae2:import_bus',
          'minecraft:diamond_block'
        ]
    )
})