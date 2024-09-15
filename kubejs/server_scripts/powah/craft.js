ServerEvents.recipes(event => {
    //中电容
    event.remove({ output: 'powah:capacitor_basic' })
    event.shaped(
        Item.of('powah:capacitor_basic',8), [
        ' BA',
        'CDC',
        'AB '
    ],
        {
            A: 'powah:dielectric_paste',
            B: '#railways:internal/plates/iron_plates',
            C: 'create:shadow_steel',
            D: 'botania:gaia_ingot'
        }
    )
    //绝缘外壳
    event.remove({ output: 'powah:dielectric_casing' })
    event.shaped(
        Item.of('powah:dielectric_casing'), [
        'ABA',
        'CDC',
        'ABA'
    ],
        {
            A: 'minecraft:iron_ingot',
            B: 'powah:dielectric_rod_horizontal',
            C: 'powah:dielectric_rod',
            D: 'thermal:energy_cell_frame'
        }
    )
    //能量线缆
    event.replaceInput([{ output: 'powah:energy_cable_starter'}],'minecraft:iron_nugget','thermal:enderium_ingot')
    event.replaceInput([{ output: 'powah:energy_cable_starter'}],'powah:capacitor_basic_tiny','thermal:energy_duct')
    //热力板
    event.remove({ output: 'powah:thermoelectric_plate' })
    event.shaped(
        Item.of('powah:thermoelectric_plate'), [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'thermal:constantan_plate',
            B: 'thermal:signalum_plate',
            C: 'powah:capacitor_basic_tiny'
        }
    )
})