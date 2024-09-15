ServerEvents.recipes(event => {
    //金粉
    event.recipes.create.milling(Item.of('thermal:gold_dust').withChance(0.9),'minecraft:gold_ingot')
    event.recipes.create.crushing(Item.of('thermal:gold_dust').withChance(0.97),'minecraft:gold_ingot')
    //银粉
    event.recipes.create.milling(Item.of('thermal:silver_dust').withChance(0.9),'thermal:silver_ingot')
    event.recipes.create.crushing(Item.of('thermal:silver_dust').withChance(0.97),'thermal:silver_ingot')
  })