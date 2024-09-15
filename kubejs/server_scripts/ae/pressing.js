ServerEvents.recipes(event => {
    //石英纤维
    event.recipes.create.pressing([Item.of('ae2:quartz_fiber').withChance(0.3)], 'minecraft:diorite')
    //平ME接口
    event.remove({output:'ae2:cable_interface'})
    event.recipes.create.pressing('ae2:cable_interface', 'ae2:interface')
  })