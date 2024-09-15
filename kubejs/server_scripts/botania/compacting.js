ServerEvents.recipes(event => {
    //烈焰石英
    event.remove({ output: 'botania:quartz_blaze' })
    event.recipes.create.compacting([Item.of('botania:quartz_blaze',6),Item.of('minecraft:blaze_powder').withChance(0.15)], ['6x minecraft:quartz','minecraft:blaze_powder','2x create:cinder_flour','3x minecraft:fire_charge']).heated()
  })