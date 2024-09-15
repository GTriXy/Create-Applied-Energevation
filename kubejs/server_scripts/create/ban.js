ServerEvents.recipes(event => {
    //limesand
    event.remove({ id: 'tfmg:milling/limesand' })
    //diamond dust
    event.remove({ id: 'thermal:earth_charge/diamond_dust_from_diamond' })
    //强力胶
    event.remove({ id: 'create:crafting/kinetics/super_glue' })
    //高炉
    event.remove({ output: 'tfmg:blast_furnace_output' })
    event.remove({ id: 'tfmg:industrial_blasting/steel' })
    //发电
    event.remove({ output: 'tfmg:generator' })
    event.remove({ output: 'tfmg:rotor' })
})