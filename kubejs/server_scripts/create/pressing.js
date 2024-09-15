ServerEvents.recipes(event => {
  //水车
  event.remove({ output: 'create:water_wheel' })
  event.recipes.create.pressing(['create:water_wheel'], 'create:large_cogwheel')
  //吸管
  event.recipes.create.pressing(['createaddition:straw'], 'thermal:rubber')
  //厚钢板
  event.remove({ output: 'tfmg:heavy_plate' })
  event.recipes.create.pressing(['5x tfmg:heavy_plate'], '#forge:storage_blocks/steel')
})