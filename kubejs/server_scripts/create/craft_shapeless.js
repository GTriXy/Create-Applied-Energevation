ServerEvents.recipes(event => {
  //钻石砂纸
  event.remove({ output: 'createaddition:diamond_grit_sandpaper' })
  event.shapeless(
    Item.of('createaddition:diamond_grit_sandpaper'),
    [
      'minecraft:diamond',
      'create:sturdy_sheet',
      '2x minecraft:sand'
    ]
  )
  event.shapeless(
    Item.of('createaddition:diamond_grit_sandpaper'),
    [
      '#forge:dusts/diamond',
      'create:sturdy_sheet',
    ]
  )
  //吸管
  event.shapeless(
    Item.of('createaddition:straw'),
    [
      '2x tfmg:plastic_sheet',
      'minecraft:bamboo'
    ]
  )
  //钢块
  event.remove({ output: 'tfmg:steel_block' })
  event.shaped(
    Item.of('tfmg:steel_block'),
    ['AAA', 'ABA', 'AAA'],
    {
      A: '#forge:ingots/steel',
      B: 'tfmg:steel_ingot'
    }
  )
})