ServerEvents.recipes(event => {
  //电容
  event.remove({ output: 'createaddition:capacitor' })
  event.recipes.create.mechanical_crafting('createaddition:capacitor', [
    ' AAA ',
    'AB BA',
    'ACCCA',
    'A D A',
    'F E F'
  ], {
    A: '#forge:plates/iron',
    B: '#forge:plates/lead',
    C: '#forge:plates/gold',
    D: 'create:precision_mechanism',
    E: 'minecraft:redstone_torch',
    F: 'create:electron_tube'
  })
  event.shaped(
    Item.of('createaddition:capacitor', 2), [
    'AFA',
    'BCB',
    'DED'
  ],
    {
      A: 'thermal:steel_plate',
      B: 'thermal:lead_plate',
      F: 'create:precision_mechanism',
      D: 'create:electron_tube',
      E: '#forge:plates/gold',
      C: 'thermal:cured_rubber'
    }
  )
  //特斯拉线圈
  event.replaceInput(
    { id: 'createaddition:mechanical_crafting/tesla_coil' },
    'createaddition:copper_spool',
    'minecraft:lightning_rod'
  )
  //能量传输器
  event.replaceInput(
    { id: 'createappliedkinetics:energy_provider' },
    'create:brass_casing',
    'ae2:mysterious_cube'
  )
  //火花塞
  event.remove({ output: 'tfmg:spark_plug' })
  event.recipes.create.mechanical_crafting('tfmg:spark_plug', [
    ' A ',
    'DBD',
    ' C '
  ], {
    A: 'minecraft:flint',
    B: 'createaddition:capacitor',
    C: 'tfmg:aluminum_ingot',
    D: '#minecraft:terracotta'
  })
  //小麦粉
  event.recipes.create.mechanical_crafting('create:wheat_flour', [
    'AB',
  ], {
    A: 'minecraft:wheat',
    B: 'minecraft:flint'
  })
  event.recipes.thermal.pulverizer('2x create:wheat_flour', 'minecraft:wheat')
  //交流发电机
  event.replaceInput(
    { output: 'createaddition:alternator' },
    '#railways:internal/plates/iron_plates',
    'thermal:signalum_plate'
  )
})