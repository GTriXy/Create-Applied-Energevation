ServerEvents.recipes(event => {
    //蛋糕
    event.remove({ id: 'minecraft:cake' })
    event.remove({ id: 'farmersdelight:cake_from_milk_bottle' })
    event.remove({ id: 'create:crafting/curiosities/cake' })
    //下界之星
    event.shaped(
        Item.of('minecraft:nether_star'), [
        'AAA',
        'BBB',
        ' B '
    ],
        {
            A: 'minecraft:wither_skeleton_skull',
            B: '#minecraft:soul_fire_base_blocks'
        }
    )
    //末影箱
    event.replaceInput([{ output: 'minecraft:ender_chest'}],'minecraft:ender_eye','botania:forest_eye')
    //钟
    event.replaceInput([{ output: 'minecraft:clock'}],'minecraft:gold_ingot','#forge:plates/gold')
    //指南针
    event.replaceInput([{ output: 'minecraft:compass'}],'minecraft:iron_ingot','#forge:plates/iron')
    //玻璃瓶
    event.shaped(
        Item.of('minecraft:glass_bottle'), [
        'A',
    ],
        {
            A: 'botania:ender_air_bottle'
        }
    )
})