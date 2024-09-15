ServerEvents.recipes(event => {
    //橡胶
    event.recipes.create.compacting('3x thermal:rubber', [Fluid.of('thermal:latex')])
  })