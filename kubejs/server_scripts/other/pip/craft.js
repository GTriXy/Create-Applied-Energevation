ServerEvents.recipes(event => {
        //管道
    event.remove({ output: 'pipez:item_pipe' })
    event.shaped(
        Item.of('pipez:item_pipe',3), [
        'AAA', 
        'BCB', 
        'AAA'
    ], 
        {
            A: '#forge:ingots/electrum', 
            B: 'minecraft:dropper',
            C: 'create:precision_mechanism'
        }
    )
    event.remove({ output: 'pipez:fluid_pipe' })
    event.shaped(
        Item.of('pipez:fluid_pipe',3), [
        'AAA', 
        'BCB', 
        'AAA'
    ], 
        {
            A: 'minecraft:iron_ingot', 
            B: 'minecraft:bucket',
            C: 'create:precision_mechanism'
        }
    )
})