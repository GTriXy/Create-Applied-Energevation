ServerEvents.recipes(event => {
    //煎锅
    event.remove({output:'farmersdelight:skillet'})
    event.recipes.create.compacting(['farmersdelight:skillet'], 'create:basin')
})