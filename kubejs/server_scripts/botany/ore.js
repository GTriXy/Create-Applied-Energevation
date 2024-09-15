ServerEvents.recipes(event => {
    //Ag
    event.recipes.botanypots.crop(
        'thermal:silver_ingot',
        ['thermal:silver_block'],{ block: 'thermal:silver_ore' },
        [
            Item.of('thermal:raw_silver').withChance(100).withRolls(1)
        ],
        1200,
        1
    )
    event.recipes.botanypots.soil(
        'thermal:silver_block', 
        { block: 'thermal:silver_block' }, 
        ['thermal:silver_block'], 
        100, 
        1 
    )
    //Sn
    event.recipes.botanypots.crop(
        'thermal:tin_ingot',
        ['thermal:tin_block'],{ block: 'thermal:tin_ore' },
        [
            Item.of('thermal:raw_tin').withChance(100).withRolls(1)
        ],
        1200,
        1
    )
    event.recipes.botanypots.soil(
        'thermal:tin_block', 
        { block: 'thermal:tin_block' }, 
        ['thermal:tin_block'], 
        120, 
        1 
    )
    //Pb
    event.recipes.botanypots.crop(
        'thermal:lead_ingot',
        ['thermal:lead_block'],{ block: 'thermal:lead_ore' },
        [
            Item.of('thermal:raw_lead').withChance(100).withRolls(1)
        ],
        1200,
        1
    )
    event.recipes.botanypots.soil(
        'thermal:lead_block', 
        { block: 'thermal:lead_block' }, 
        ['thermal:lead_block'], 
        110, 
        1 
    )
    //Ni
    event.recipes.botanypots.crop(
        'thermal:nickel_ingot',
        ['thermal:nickel_block'],{ block: 'thermal:nickel_ore' },
        [
            Item.of('thermal:raw_nickel').withChance(100).withRolls(1)
        ],
        1200,
        1
    )
    event.recipes.botanypots.soil(
        'thermal:nickel_block', 
        { block: 'thermal:nickel_block' }, 
        ['thermal:nickel_block'], 
        150, 
        1 
    )
    //黄铀
    event.recipes.botanypots.crop(
        'bigreactors:yellorite_ore',
        ['bigreactors:yellorium_block'],{ block: 'bigreactors:yellorite_ore' },
        [
            Item.of('bigreactors:yellorite_ore').withChance(100).withRolls(1)
        ],
        1200,
        1
    )
    event.recipes.botanypots.soil(
        'bigreactors:yellorium_block', 
        { block: 'bigreactors:yellorium_block' }, 
        ['bigreactors:yellorium_block'], 
        200, 
        1 
    )
    //磷灰石
    event.recipes.botanypots.crop(
        'thermal:apatite',
        ['thermal:apatite_block'],{ block: 'thermal:apatite_ore' },
        [
            Item.of('thermal:apatite').withChance(100).withRolls(1)
        ],
        1200,
        1
    )
    event.recipes.botanypots.soil(
        'thermal:apatite_block', 
        { block: 'thermal:apatite_block' }, 
        ['thermal:apatite_block'], 
        150, 
        1 
    )
})