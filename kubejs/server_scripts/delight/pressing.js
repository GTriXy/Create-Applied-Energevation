ServerEvents.recipes(event => {
        //砧板
        event.remove({output:'farmersdelight:cutting_board'})
        event.recipes.create.pressing(['farmersdelight:cutting_board'], 'create:depot')
})