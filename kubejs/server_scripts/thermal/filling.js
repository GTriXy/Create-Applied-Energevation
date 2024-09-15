ServerEvents.recipes(event => {
    //沥青沙
    event.recipes.create.filling('thermal:oil_sand', [Fluid.of('thermal:crude_oil',650),'minecraft:sand'])
    event.recipes.create.filling('thermal:oil_sand', [Fluid.of('tfmg:crude_oil_fluid',650),'minecraft:sand'])
  })