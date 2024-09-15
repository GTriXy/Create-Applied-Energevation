ServerEvents.recipes(event => {
    //末影核心
    event.remove({ output: 'powah:ender_core' })
	event.recipes.powah.energizing(['minecraft:ender_eye','powah:capacitor_basic_tiny','botania:mana_bomb','createaddition:biomass_pellet'], 'powah:ender_core', 50000)
    //钻石
    event.remove({ output: 'powah:crystal_niotic' })
	event.recipes.powah.energizing(['advancednetherite:netherite_diamond_ingot'], '2x powah:crystal_niotic', 30000)
    //铁
    event.remove({ output: 'powah:steel_energized' })
	event.recipes.powah.energizing(['minecraft:iron_ingot','minecraft:gold_ingot'], 'powah:steel_energized', 2000)
    //绿宝石
    event.remove({ output: 'powah:crystal_spirited' })
	event.recipes.powah.energizing(['advancednetherite:netherite_emerald_ingot'], '2x powah:crystal_spirited', 85000)
    //下界水晶
    event.remove({ output: 'powah:crystal_nitro' })
	event.recipes.powah.energizing(['minecraft:nether_star','minecraft:redstone_block','minecraft:redstone_block','powah:crystal_blazing','powah:crystal_blazing'], '3x powah:crystal_nitro', 135000)
    //充能钢
    event.remove({ output: 'powah:crystal_nitro' })
	event.recipes.powah.energizing(['#forge:ingots/steel','minecraft:gold_ingot'], 'powah:steel_energized', 15000)
})