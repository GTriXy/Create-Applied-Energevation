ServerEvents.recipes(event => {
    //控制器
    event.replaceInput([{ output: 'bigreactors:basic_reactorcontroller'}],'minecraft:comparator','create_things_and_misc:vibration_mechanism')
    event.replaceInput([{ output: 'bigreactors:reinforced_reactorcontroller'}],'minecraft:comparator','create_things_and_misc:vibration_mechanism')
    event.replaceInput([{ output: 'bigreactors:reprocessorcontroller'}],'minecraft:comparator','create_things_and_misc:vibration_mechanism')
    event.replaceInput([{ output: 'bigreactors:reinforced_reprocessorcontroller'}],'minecraft:comparator','create_things_and_misc:vibration_mechanism')
    event.replaceInput([{ output: 'bigreactors:fluidizercontroller'}],'minecraft:comparator','create_things_and_misc:vibration_mechanism')
})