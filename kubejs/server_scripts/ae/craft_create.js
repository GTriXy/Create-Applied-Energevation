ServerEvents.recipes(event => {
    //压印器
    event.remove({ output: 'ae2:inscriber' })
    event.recipes.create.mechanical_crafting('ae2:inscriber', [
        'EAFAA',
        'ABCB ',
        'A D  ',
        'ABCB',
        'EAFAA'
    ], {
        A: '#forge:ingots/iron',
        B: 'minecraft:piston',
        C: 'create:mechanical_piston',
        D: 'create:weighted_ejector',
        E: 'tfmg:cast_iron_block',
        F:'ae2:fluix_crystal'
    })
})