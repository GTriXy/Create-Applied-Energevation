ServerEvents.recipes(event => {
    //琥珀金板
    event.remove({output:'createaddition:electrum_sheet'})
    event.recipes.create.pressing('thermal:electrum_plate', '#forge:ingots/electrum')
    //铅板
    event.recipes.create.pressing('thermal:lead_plate', '#forge:ingots/lead')
    //信素板
    event.recipes.create.pressing('thermal:signalum_plate', 'thermal:signalum_ingot')
    //钢板
    event.recipes.create.pressing('thermal:steel_plate', ['#forge:ingots/steel'])
    //青铜板
    event.recipes.create.pressing('thermal:bronze_plate', ['#forge:ingots/bronze'])
  })