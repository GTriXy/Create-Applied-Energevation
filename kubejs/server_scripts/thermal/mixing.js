ServerEvents.recipes(event => {
    //玫瑰金
    event.remove({ output: 'thermal:rose_gold_ingot' })
    event.recipes.create.mixing('3x thermal:rose_gold_ingot', ['3x minecraft:gold_ingot', 'create:rose_quartz', '3x minecraft:copper_ingot']).heated()
    //信素
    event.remove({ output: 'thermal:signalum_ingot' })
    event.recipes.create.mixing('4x thermal:signalum_ingot', ['3x thermal:rose_gold_ingot', '6x create:rose_quartz', '4x powah:crystal_blazing', 'thermal:silver_ingot']).superheated()
    //流明
    event.remove({ output: 'thermal:lumium_ingot' })
    event.recipes.create.mixing('4x thermal:lumium_ingot', ['3x thermal:bronze_ingot', '3x powah:crystal_blazing', '6x minecraft:glowstone', '2x #forge:ingots/electrum']).superheated()
    //海晶面料
    event.recipes.create.mixing('thermal:diving_fabric', ['thermal:apatite_dust', '2x minecraft:prismarine_shard', 'thermal:beekeeper_fabric', '2x createaddition:biomass',Fluid.of('tfmg:lpg',650)]).superheated()
    //殷钢
    event.remove({ id: 'thermal:fire_charge/invar_ingot_3' })
    event.recipes.create.mixing('3x thermal:invar_ingot', ['thermal:nickel_ingot', '2x minecraft:iron_ingot']).heated()
    //青铜
    event.remove({ id: 'thermal:fire_charge/bronze_ingot_4' })
    event.recipes.create.mixing('4x thermal:bronze_ingot', ['thermal:tin_ingot', '3x minecraft:copper_ingot']).heated()
})