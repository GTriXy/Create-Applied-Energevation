ServerEvents.recipes(event => {
    //烈焰蛋糕底
    event.remove({ output: 'create:blaze_cake_base' })
    event.recipes.create.deploying('create:blaze_cake_base', ['farmersdelight:cake_slice','powah:crystal_blazing'])
    //焦炉
    event.remove({ output: 'tfmg:coke_oven' })
    event.recipes.create.deploying('tfmg:coke_oven', ['create:industrial_iron_block','jitl:flairium_ingot'])
    //光辉石
    event.recipes.create.deploying('create:refined_radiance', ['create:chromatic_compound','minecraft:chain_command_block']).keepHeldItem()
    //暗影钢
    event.recipes.create.deploying('create:shadow_steel', ['create:chromatic_compound','minecraft:chain_command_block']).keepHeldItem()
  })