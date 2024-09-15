ServerEvents.recipes(event => {
    //琥珀金
    event.remove({output:'thermal:electrum_ingot'})
    event.remove({output:'createaddition:electrum_ingot'})
    event.remove({output:'thermal:electrum_dust'})
    event.recipes.create.mixing('thermal:electrum_dust', ['#forge:dusts/gold','#forge:dusts/silver']).heated()
    event.blasting('thermal:electrum_ingot', 'thermal:electrum_dust')
    event.recipes.thermal.smelter('thermal:electrum_ingot', ['thermal:silver_ingot','minecraft:gold_ingot'])
})