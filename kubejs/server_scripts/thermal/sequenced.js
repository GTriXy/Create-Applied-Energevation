ServerEvents.recipes(event => {
    //梭织布
    event.recipes.create.sequenced_assembly('2x thermal:beekeeper_fabric', 'create:sail_frame', [
        event.recipes.createDeploying('create:sail_frame', ['create:sail_frame', 'minecraft:string']),
        event.recipes.createDeploying('create:sail_frame', ['create:sail_frame', 'thermal:rubber']),
        event.recipes.createPressing('create:sail_frame', 'create:sail_frame'),
        event.recipes.createDeploying('create:sail_frame', ['create:sail_frame', 'minecraft:string']),
        event.recipes.createCutting('create:sail_frame', 'create:sail_frame')
    ]).transitionalItem('create:sail_frame').loops(2)
})