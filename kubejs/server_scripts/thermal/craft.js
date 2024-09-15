ServerEvents.recipes(event => {
    //伺服器
    event.remove({ output: 'thermal:servo_attachment' })
    event.shaped(
        Item.of('thermal:servo_attachment'), [
        '   ',
        'ABA',
        'CDC'
    ],
        {
            A: 'thermal:tin_nugget',
            B: '#forge:glass',
            C: 'minecraft:iron_ingot',
            D: 'create:precision_mechanism'
        }
    )
    //机器框架
    event.remove({ output: 'thermal:machine_frame' })
    event.shaped(
        Item.of('thermal:machine_frame'), [
        'ABA',
        'CDC',
        'EBE'
    ],
        {
            A: 'botania:elementium_block',
            B: 'create_sa:heat_engine',
            C: 'tfmg:turbine_engine',
            D: 'ae2:mysterious_cube',
            E:'tfmg:rebar_concrete'
        }
    )
    //冲压机
    event.replaceInput([{ output: 'thermal:machine_press'}],'minecraft:iron_block','create:mechanical_press')
    event.replaceInput([{ output: 'thermal:machine_press'}],'thermal:bronze_ingot','createaddition:electrum_spool')
    //红石通量线圈
    event.replaceInput([{ output: 'thermal:rf_coil'}],'minecraft:gold_ingot','thermal:lumium_ingot')
    //树脂提取机
    event.replaceInput([{ output: 'thermal:device_tree_extractor'}],'#forge:glass','#thermal:glass/hardened')
    //流体单元框架
    event.remove({ output: 'thermal:fluid_cell_frame' })
    event.shaped(
        Item.of('thermal:fluid_cell_frame'), [
        'ABA',
        'CDC',
        'ABA'
    ],
        {
            A: 'minecraft:copper_ingot',
            B: 'thermal:cured_rubber',
            C: '#thermal:glass/hardened',
            D: 'create:fluid_tank'
        }
    )
    //流体精炼机
    event.replaceInput([{ output: 'thermal:machine_refinery'}],'#forge:glass','thermal:fluid_cell_frame')
    //红石通量单元
    event.remove({ output: 'thermal:energy_cell_frame' })
    event.shaped(
        Item.of('thermal:energy_cell_frame'), [
        'ABA',
        'CDC',
        'ABA'
    ],
        {
            A: 'kubejs:colorless_compound',
            B: 'thermal:rosin',
            C: '#thermal:glass/hardened',
            D: 'thermal:electrum_gear'
        }
    )
    //结晶器
    event.replaceInput([{ output: 'thermal:machine_crystallizer'}],'#thermal:glass/hardened','thermal:energy_cell')
    event.replaceInput([{ output: 'thermal:machine_crystallizer'}],'thermal:signalum_plate','thermal:rosin')
    //离心机
    event.replaceInput([{ output: 'thermal:machine_centrifuge'}],'thermal:tin_ingot','mythicbotany:alfsteel_ingot')
    //涡轮伺服器
    event.replaceInput([{ output: 'thermal:turbo_servo_attachment'}],'thermal:redstone_servo','thermal:servo_attachment')
    //物品过滤规则
    event.replaceInput([{ output: 'thermal:item_filter_augment'}],'thermal:signalum_ingot','minecraft:iron_ingot')
    //流体管道
    event.remove({ output: 'thermal:fluid_duct' })
    event.shaped(
        Item.of('thermal:fluid_duct',3), [
        'A A',
        'CBC',
        'A A'
    ],
        {
            A: 'thermal:bronze_ingot',
            B: 'thermal:lead_ingot',
            C: 'thermal:bronze_plate'
        }
    )
    //流体管道视窗
    event.remove({ output: 'thermal:fluid_duct_windowed' })
    event.shaped(
        Item.of('thermal:fluid_duct_windowed',8), [
        'AAA',
        'ABA',
        'AAA'
    ],
        {
            A: 'thermal:fluid_duct',
            B: '#thermal:glass/hardened'
        }
    )
})