ServerEvents.recipes(event => {
    //线
    event.remove({ id: 'minecraft:string' })
    event.recipes.create.sequenced_assembly(['5x minecraft:string',Item.of('minecraft:string',3).withChance(0.15),Item.of('minecraft:string',4).withChance(0.25)], 'thermal:flax', [
        event.recipes.createDeploying('thermal:flax', ['thermal:flax', 'thermal:flax']),
        event.recipes.createDeploying('thermal:flax', ['thermal:flax', 'minecraft:stick']).keepHeldItem(),
        event.recipes.createPressing('thermal:flax', 'thermal:flax'),
        event.recipes.createDeploying('thermal:flax', ['thermal:flax', 'thermal:flax']),
        event.recipes.createCutting('thermal:flax', 'thermal:flax')
    ]).transitionalItem('thermal:flax').loops(1)
})