ServerEvents.recipes(event => {
    //末影箱
    event.remove({
        output: 'enderstorage:ender_chest'
    })
    event.recipes.create.mechanical_crafting(
        Item.of('enderstorage:ender_chest'), [
            'ACBCA',
            "C   C",
            'C D C',
            "C   C",
            'ACECA'
        ], {
            A: 'minecraft:blaze_rod',
            B: '#minecraft:wool',
            C: 'minecraft:obsidian',
            D: 'minecraft:ender_chest',
            E: 'create:precision_mechanism'
        }
    )
    //末影蓄水槽
    event.remove({
        output: 'enderstorage:ender_tank'
    })
    event.recipes.create.mechanical_crafting(
        Item.of('enderstorage:ender_tank'), [
            'AABAA',
            "C   C",
            'C D C',
            "C   C",
            'AAEAA'
        ], {
            A: 'minecraft:obsidian',
            B: '#minecraft:wool',
            C: 'minecraft:blaze_rod',
            D: 'minecraft:ender_chest',
            E: 'create:precision_mechanism'
        }
    )
})