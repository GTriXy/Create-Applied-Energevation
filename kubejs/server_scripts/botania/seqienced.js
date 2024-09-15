ServerEvents.recipes(event => {
  //精灵门核心
  event.remove({ output: 'botania:alfheim_portal' })
  event.recipes.create.sequenced_assembly('botania:alfheim_portal', 'botania:glimmering_livingwood', [
    event.recipes.createDeploying('botania:glimmering_livingwood', ['botania:glimmering_livingwood', 'botania:terrasteel_ingot']),
    event.recipes.createDeploying('botania:glimmering_livingwood', ['botania:glimmering_livingwood', 'tfmg:napalm_bomb']),
    event.recipes.createFilling('botania:glimmering_livingwood', ['botania:glimmering_livingwood', Fluid.of('tfmg:cooling_fluid')])
  ]).transitionalItem('botania:glimmering_livingwood').loops(1)
  //自然水晶
  event.remove({ output: 'botania:natura_pylon' })
  event.recipes.create.sequenced_assembly('botania:natura_pylon', 'ae2:mysterious_cube', [
    event.recipes.createDeploying('ae2:mysterious_cube', ['ae2:mysterious_cube', 'botania:mana_pylon']),
    event.recipes.createDeploying('ae2:mysterious_cube', ['ae2:mysterious_cube', 'botania:terrasteel_nugget']),
    event.recipes.createDeploying('ae2:mysterious_cube', ['ae2:mysterious_cube', 'botania:terrasteel_nugget']),
    event.recipes.createDeploying('ae2:mysterious_cube', ['ae2:mysterious_cube', 'botania:terrasteel_nugget']),
    event.recipes.createDeploying('ae2:mysterious_cube', ['ae2:mysterious_cube', 'minecraft:ender_eye'])
  ]).transitionalItem('ae2:mysterious_cube').loops(1)
  //盖亚魂
  event.recipes.create.sequenced_assembly('12x botania:life_essence', 'botania:mana_bomb', [
    event.recipes.createDeploying('botania:mana_bomb', ['botania:mana_bomb', 'botania:life_essence']),
    event.recipes.createDeploying('botania:mana_bomb', ['botania:mana_bomb', 'mythicbotany:alfsteel_ingot']),
    event.recipes.createCutting('botania:mana_bomb', 'botania:mana_bomb')
  ]).transitionalItem('botania:mana_bomb').loops(1)
  //魔力风暴
  event.remove({ output: 'botania:mana_bomb' })
  event.recipes.create.sequenced_assembly('botania:mana_bomb', 'botania:life_essence', [
    event.recipes.createDeploying('botania:life_essence', ['botania:life_essence', '#botania:livingwood_logs']),
    event.recipes.createDeploying('botania:life_essence', ['botania:life_essence', 'minecraft:tnt']),
    event.recipes.createPressing('botania:life_essence', 'botania:life_essence')
  ]).transitionalItem('botania:life_essence').loops(2)
})