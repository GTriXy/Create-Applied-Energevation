ServerEvents.recipes(event => {
    //谐振仓
    event.remove({ output: 'ae2:vibration_chamber' })
    event.shaped(
        Item.of('ae2:vibration_chamber', 1), [
        'AAA',
        'ACA',
        'BBB'
    ],
        {
            A: 'minecraft:stone',
            C: 'minecraft:blast_furnace',
            B: 'minecraft:polished_andesite'
        }
    )
    //包层线缆
    event.shaped(
        Item.of('ae2:fluix_covered_cable', 1), [
        'ABA',
        'CBC',
        'ABA'
    ],
        {
            A: '#minecraft:wool',
            B: 'create:shaft',
            C: '#minecraft:planks'
        }
    )
    //输入总线
    event.remove({ output: 'ae2:import_bus' })
    event.shaped(
        Item.of('ae2:import_bus', 1), [
        '   ',
        ' A ',
        'BCB'
    ],
        {
            A: '#forge:chests/wooden',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:sticky_piston'
        }
    )
    //输出总线
    event.remove({ output: 'ae2:export_bus' })
    event.shaped(
        Item.of('ae2:export_bus', 1), [
        '   ',
        'BAB',
        ' C '
    ],
        {
            A: '#forge:chests/wooden',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:piston'
        }
    )
    //me接口
    event.remove({ output: 'ae2:interface' })
    event.shaped(
        Item.of('ae2:interface', 1), [
        'ABA',
        'C C',
        'ABA'
    ],
        {
            A: 'minecraft:iron_ingot',
            B: '#forge:glass',
            C: 'minecraft:hopper'
        }
    )
    //照明面板
    event.remove({ output: 'ae2:semi_dark_monitor' })
    event.shaped(
        Item.of('ae2:semi_dark_monitor', 1), [
        ' DA',
        'BCA',
        ' DA'
    ],
        {
            A: '#forge:glass',
            B: 'ae2:cable_anchor',
            C: 'minecraft:glowstone',
            D: '#ae2:metal_ingots'
        }
    )
    //能源接收器
    event.remove({ output: 'ae2:energy_acceptor' })
    event.shaped(
        Item.of('ae2:energy_acceptor', 1), [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:copper_ingot',
            C: 'create:precision_mechanism'
        }
    )
    //陨石罗盘
    event.shaped(
        Item.of('ae2:meteorite_compass', 1), [
        ' B ',
        'BCB',
        ' B '
    ],
        {
            B: 'minecraft:iron_ingot',
            C: 'minecraft:compass'
        }
    )
    //样板
    event.remove({ output: 'ae2:blank_pattern' })
    event.shaped(
        Item.of('ae2:blank_pattern', 3), [
        'ABA',
        'BCB',
        'DED'
    ],
        {
            A: 'ae2:quartz_glass',
            B: 'minecraft:glowstone_dust',
            C: 'thermal:beekeeper_fabric',
            D: 'minecraft:iron_ingot',
            E: '#ae2:all_certus_quartz'
        }
    )
    //装配室
    event.replaceInput([{ output: 'ae2:molecular_assembler' }], 'minecraft:crafting_table', 'quark:crafter')
    //P2P
    event.remove({ output: 'ae2:me_p2p_tunnel' })
    event.shaped(
        Item.of('ae2:me_p2p_tunnel'), [
        ' A ',
        'ABA',
        'CCC'
    ],
        {
            A: 'minecraft:iron_ingot',
            B: '#ae2:illuminated_panel',
            C: 'ae2:quartz_fiber'
        }
    )
    //魔力元件
    event.replaceInput([{ output: 'appbot:mana_cell_housing' }], 'botania:life_essence', 'botania:elementium_ingot')
    //能源元件
    event.remove({ output: 'ae2:energy_cell' })
    event.shaped(
        Item.of('ae2:energy_cell'), [
        'ABA',
        'CDC',
        'ABA'
    ],
        {
            A: '#ae2:all_certus_quartz',
            B: 'botania:livingrock',
            C: '#c:glass_blocks',
            D:'ae2:vibration_chamber'
        }
    )
    //元件工作台
    event.replaceInput([{ output: 'ae2:cell_workbench' }], 'ae2:calculation_processor', 'ae2:printed_calculation_processor')
    //充能器
    event.remove({ output: 'ae2:charger' })
    event.shaped(
        Item.of('ae2:charger'), [
        'AEC',
        'A  ',
        'ABD'
    ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:copper_ingot',
            C: 'ae2:fluix_crystal',
            D:'thermal:invar_ingot',
            E:'createaddition:capacitor'
        }
    )
    //量子链接仓
    event.remove({ output: 'ae2:quantum_link' })
    event.shaped(
        Item.of('ae2:quantum_link'), [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'ae2:quartz_vibrant_glass',
            B: 'ae2:fluix_pearl',
            C: 'ae2:singularity',
        }
    )
    //无限水单元
    event.replaceInput([{ output: 'appbot:mana_cell_housing' }], 'botania:life_essence', 'botania:elementium_ingot')
})