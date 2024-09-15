ServerEvents.recipes(event => {
    //样板管理终端
    event.remove({output:'ae2:pattern_access_terminal'})
    event.smithing(
        'ae2:pattern_access_terminal',// arg 1: output
        'ae2:engineering_processor', // arg 2: the smithing template
        'ae2:terminal',// arg 3: the item to be upgraded
        '#ae2:pattern_provider'// arg 4: the upgrade item
    )
    //me合成终端
    event.remove({ output: 'ae2:crafting_terminal' })
    event.smithing(
        'ae2:crafting_terminal',
        'create:precision_mechanism',
        'ae2:terminal',
        'minecraft:crafting_table'
    )
    //样板编码终端
    event.remove({ output: 'ae2:pattern_encoding_terminal' })
    event.smithing(
        'ae2:pattern_encoding_terminal',
        'ae2:engineering_processor',
        'ae2:crafting_terminal',
        'ae2:cell_workbench'
    )
    //ME箱子
    event.remove({ output: 'ae2:chest' })
    event.smithing(
        'ae2:chest',
        'ae2:interface',
        'ae2:smooth_sky_stone_chest',
        'ae2:terminal'
    )
  })//