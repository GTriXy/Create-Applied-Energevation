ServerEvents.recipes(event => {
    //幻翼膜
    event.recipes.create.compacting('2x minecraft:phantom_membrane', ['4x minecraft:leather','thermal:beekeeper_fabric','minecraft:dragon_breath']).heated()
    event.recipes.create.compacting(['3x minecraft:phantom_membrane',Item.of('thermal:beekeeper_fabric').withChance(0.5)], ['2x minecraft:leather','thermal:beekeeper_fabric','apotheosis:infused_breath']).heated()
  })