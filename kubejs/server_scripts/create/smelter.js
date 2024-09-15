ServerEvents.recipes(event => {
    //下界合金磁铁
    event.remove({ output: 'create_new_age:netherite_magnet' })
    event.recipes.thermal.smelter('create_new_age:netherite_magnet',['create_new_age:fluxuated_magnetite','minecraft:netherite_block','2x thermal:enderium_ingot'])
})