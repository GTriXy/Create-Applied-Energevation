ServerEvents.recipes(event => {
    //磁铁矿块
    event.recipes.create.mixing([Item.of('create_new_age:magnetite_block',4)], [Item.of('minecraft:raw_iron_block',3),'10x minecraft:amethyst_block','6x minecraft:iron_block']).heated()
    //蛋糕底座
    event.remove({ output: 'createaddition:cake_base' })
    event.recipes.create.mixing(['createaddition:cake_base'], ['2x create:dough','2x minecraft:sugar','minecraft:egg',Fluid.water(200)])
    //水泥
    event.remove({ output: 'tfmg:cement' })
    event.recipes.create.mixing(['2x tfmg:cement'], ['tfmg:limesand','3x minecraft:clay','2x minecraft:light_gray_concrete_powder',Fluid.water(200)])
    //耐火黏土球
    event.recipes.create.mixing(['2x tfmg:fireclay_ball'], ['4x tfmg:concrete_mixture','2x minecraft:clay_ball','3x create:cinder_flour']).heated()
    //混凝土
    event.remove({ id: 'tfmg:mixing/liquid_concrete' })
    //生物质
    event.remove({ output: 'createaddition:biomass' })
    event.recipes.create.mixing(['createaddition:biomass'], ['3x minecraft:moss_block',Fluid.of('createaddition:seed_oil',100)])
    //红石磁铁
    event.remove({ output: 'create_new_age:redstone_magnet' })
    event.recipes.create.mixing(['create_new_age:redstone_magnet'], ['8x create:crushed_raw_iron','4x minecraft:redstone_block','create_new_age:magnetite_block']).superheated()
    //铝土矿
    event.recipes.create.mixing(['2x tfmg:bauxite'], ['2x minecraft:red_sand','5x minecraft:clay_ball',Fluid.water(350)])
    //蜜渍苹果
    event.remove({ output: 'create:honeyed_apple' })
    event.recipes.create.mixing(['create:honeyed_apple'], ['minecraft:apple',Fluid.of('create:honey',250),Fluid.of('thermal:syrup',250)])
    event.recipes.create.mixing(['create:honeyed_apple'], ['minecraft:apple',Fluid.of('cofh_core:honey',250),Fluid.of('thermal:syrup',250)])
    //熔融钢
    event.remove({ output: 'tfmg:molten_slag' })
    event.recipes.create.mixing([Fluid.of('tfmg:molten_steel',168),Fluid.of('tfmg:molten_slag',50)], ['tfmg:coal_coke_dust','tfmg:blasting_mixture']).superheated()
})