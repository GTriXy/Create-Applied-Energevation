ServerEvents.recipes(event => {
    event.recipes.create.deploying('festive_delight:gingerbread_cookie_dough_creeper', ['festive_delight:gingerbread_dough','festive_delight:creeper_cutter']).keepHeldItem()
    event.recipes.create.deploying('festive_delight:gingerbread_man_dough', ['festive_delight:gingerbread_dough','festive_delight:gingerbread_man_cutter']).keepHeldItem()
    event.recipes.create.deploying('festive_delight:sword_bread_cookie_dough', ['festive_delight:gingerbread_dough','festive_delight:sword_cutter']).keepHeldItem()
  })