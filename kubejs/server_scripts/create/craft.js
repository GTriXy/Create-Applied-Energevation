ServerEvents.recipes(event => {
    //机械手
    event.remove({ output: 'create:deployer' })
    event.shaped(
        Item.of('create:deployer', 1), [
        ' A ',
        ' B ',
        ' C '
    ],
        {
            A: 'create:shaft',
            B: 'create:andesite_casing',
            C: 'create:brass_hand'
        }
    )
    // 黄铜手部部件
    event.shaped(
        Item.of('create:brass_hand'), [
        ' A ',
        'BBB',
        'CBC'
    ],
        {
            A: 'create:andesite_alloy',
            B: 'minecraft:copper_ingot',
            C: '#forge:dyes/yellow'
        }
    )
    // 石磨
    event.remove({ output: 'create:millstone' })
    event.shaped(
        Item.of('create:millstone'), [
        ' A ',
        'BCB',
        'DDD'
    ],
        {
            A: 'create:cogwheel',
            B: 'create:sturdy_sheet',
            C: 'create:andesite_casing',
            D: '#forge:stone'
        }
    )
    //空燃烧室
    event.remove({ output: 'create:empty_blaze_burner' })
    event.shaped(
        Item.of('create:empty_blaze_burner'), [
        '   ',
        'AAA',
        'BCB'
    ],
        {
            A: 'minecraft:iron_bars',
            B: 'create:sturdy_sheet',
            C: 'minecraft:netherrack'
        }
    )
    //蒸汽引擎
    event.remove({ output: 'create:steam_engine' })
    event.shaped(
        Item.of('create:steam_engine'), [
        ' A ',
        'BCB',
        'DED'
    ],
        {
            A: '#forge:plates/gold',
            B: 'create:sturdy_sheet',
            C: 'create:andesite_alloy',
            D: 'minecraft:copper_block',
            E: 'create:precision_mechanism'
        }
    )
    //碳刷
    event.remove({ output: 'create_new_age:carbon_brushes' })
    event.shaped(
        Item.of('create_new_age:carbon_brushes'), [
        'ABA',
        'CDC',
        'ABA'
    ],
        {
            A: 'tfmg:cast_iron_truss',
            B: 'thermal:signalum_block',
            C: 'bigreactors:graphite_ingot',
            D: 'create:precision_mechanism'
        }
    )
    //发电机线圈
    event.remove({ output: 'create_new_age:generator_coil' })
    event.shaped(
        Item.of('create_new_age:generator_coil'), [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:copper_block',
            C: 'create:sturdy_sheet'
        }
    )
    //合成器
    event.remove({ output: 'create:mechanical_crafter' })
    event.shaped(
        Item.of('create:mechanical_crafter', 3), [
        ' A ',
        'BCB',
        'DED'
    ],
        {
            A: 'create:electron_tube',
            B: 'create_sa:steam_engine',
            C: 'create:brass_casing',
            D: 'create:brass_ingot',
            E: 'minecraft:crafting_table'
        }
    )
    //风车
    event.remove({ output: 'create:windmill_bearing' })
    event.shaped(
        Item.of('create:windmill_bearing'), [
        ' A ',
        'CBC',
        ' E '
    ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'create:andesite_casing',
            C: '#forge:plates/iron',
            E: 'create:shaft'
        }
    )
    //焦炉
    event.shaped(
        Item.of('tfmg:coke_oven'), [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'minecraft:clay_ball',
            B: 'minecraft:brick',
            C: '#forge:sandstone'
        }
    )
    //空线轴
    event.remove({ output: 'createaddition:spool' })
    event.shaped(
        Item.of('createaddition:spool',2), [
        ' A ',
        ' B ',
        ' A '
    ],
        {
            A: '#minecraft:planks',
            B: 'createaddition:iron_rod'
        }
    )
    //轧机
    event.replaceInput([{ output: 'createaddition:rolling_mill'}],'#railways:internal/plates/iron_plates','create_sa:heat_engine')
    //普通激发器
    event.remove({ output: 'create_new_age:energiser_t1' })
    event.shaped(
        Item.of('create_new_age:energiser_t1'), [
        ' A ',
        ' B ',
        ' C '
    ],
        {
            A: 'tfmg:steel_casing',
            B: 'createaddition:copper_rod',
            C:'minecraft:lightning_rod'
        }
    )
    //钻石磁铁
    event.replaceInput([{ output: 'create_new_age:fluxuated_magnetite'}],'create_new_age:magnetite_block','create_new_age:layered_magnet')
    //物品传输器
    event.replaceInput([{ output: 'createendertransmission:item_transmitter'}],'minecraft:ender_eye','minecraft:ender_chest')
    //流体传输器
    event.replaceInput([{ output: 'createendertransmission:fluid_transmitter'}],'minecraft:ender_eye','minecraft:ender_chest')
})