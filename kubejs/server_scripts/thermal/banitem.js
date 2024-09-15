ServerEvents.recipes(event => {
    //橡胶
    event.remove([{ id: 'thermal:rubber_from_vine' },{id:'thermal:rubber_from_dandelion'}])
    //硫化橡胶
    event.remove([{ id: 'thermal:smelting/cured_rubber_from_smelting' },{id:'thermal:fyrnace_1770929113'}])
    //玫瑰金
    event.remove([{ id: 'thermal:parts/rose_gold_gear' }])
    //磷灰石
    event.remove([{ id: 'thermal:earth_charge/apatite_dust_from_apatite' }])
    //火焰弹合成
    event.remove([{ id: 'thermal:fire_charge/obsidian_glass_2' }])
    //能源炉
    event.remove([{ output: 'thermal:dynamo_stirling' }])
    event.remove([{ output: 'thermal:dynamo_magmatic' }])
    event.remove([{ output: 'thermal:dynamo_numismatic' }])
    event.remove([{ output: 'thermal:dynamo_lapidary' }])
    event.remove([{ output: 'thermal:dynamo_disenchantment' }])
    event.remove([{ output: 'thermal:dynamo_gourmand' }])
    event.remove([{ output: 'thermal_extra:dynamo_frost' }])
    //锭
    event.remove([{ id: 'thermal:lumium_dust_4' }])
    event.remove([{ id: 'thermal:signalum_dust_4' }])
})