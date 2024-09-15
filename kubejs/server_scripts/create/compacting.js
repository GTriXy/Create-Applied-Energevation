ServerEvents.recipes(event => {
  //烘焙蛋糕底座
  event.remove({ output: 'createaddition:cake_base_baked' })
  event.recipes.create.compacting('createaddition:cake_base_baked', [ 'createaddition:cake_base', 'minecraft:sugar']).heated()
  //工业铁块
  event.remove({ output: 'create:industrial_iron_block' })
  event.recipes.create.compacting('2x create:industrial_iron_block', ['2x minecraft:iron_block', 'minecraft:coal_block']).superheated()
  //石灰岩
  event.recipes.create.compacting('create:limestone', ['2x minecraft:flint', Fluid.of('minecraft:lava', 100), 'minecraft:sand'])
  //钢
  event.remove({ id: 'tfmg:casing/steel' })
  event.recipes.create.compacting('tfmg:steel_ingot', [Fluid.of('tfmg:molten_steel', 112)])
  //混凝土
  event.recipes.create.compacting('tfmg:concrete', [Fluid.of('tfmg:liquid_concrete')])
})