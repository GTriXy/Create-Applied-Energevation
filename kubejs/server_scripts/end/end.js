ServerEvents.recipes(event => {
    //创造能源元件 
    event.recipes.create.sequenced_assembly('ae2:creative_energy_cell', 'megacells:mega_energy_cell', [
        event.recipes.createDeploying('megacells:mega_energy_cell', ['megacells:mega_energy_cell', 'ae2:energy_acceptor']),
        event.recipes.createDeploying('megacells:mega_energy_cell', ['megacells:mega_energy_cell', 'thermal:rf_potato']),
        event.recipes.createDeploying('megacells:mega_energy_cell', ['megacells:mega_energy_cell', 'create_things_and_misc:mending_rune']),
        event.recipes.createDeploying('megacells:mega_energy_cell', ['megacells:mega_energy_cell', 'powah:solar_panel_nitro']),
        event.recipes.createDeploying('megacells:mega_energy_cell', ['megacells:mega_energy_cell', 'create_new_age:netherite_magnet']),
        event.recipes.createDeploying('megacells:mega_energy_cell', ['megacells:mega_energy_cell', 'bigreactors:inanite_block'])
    ]).transitionalItem('megacells:mega_energy_cell').loops(25)
    //创造发电机
	event.recipes.create.sequenced_assembly('createaddition:creative_energy', 'ae2:creative_energy_cell', [
		event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'createaddition:alternator']),
		event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'create_new_age:carbon_brushes']),
		event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'powah:lens_of_ender']),
		event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'ae2:vibration_chamber']),
		event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'powah:thermo_generator_nitro']),
		event.recipes.createPressing('ae2:creative_energy_cell', 'ae2:creative_energy_cell')
	]).transitionalItem('create_new_age:copper_circuit').loops(20)
    //空的元件
	event.recipes.create.sequenced_assembly('kubejs:creative_empty_cell', 'ae2:creative_energy_cell', [ 
        event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell','ae2:portable_item_cell_256k']),
		event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'mythicbotany:kvasir_blood']).keepHeldItem(),
        event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'botania:gaia_ingot']),
        event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell','ae2:singularity']),
        event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell', 'festive_delight:gingerbread_pillar']),
        event.recipes.createDeploying('ae2:creative_energy_cell', ['ae2:creative_energy_cell','create_sa:vault_component']),
	]).transitionalItem('ae2:creative_energy_cell').loops(30) 
    //创造流体元件
    event.recipes.create.deploying('ae2:creative_fluid_cell', ['kubejs:creative_empty_cell','megacells:portable_fluid_cell_256m'])
    //创造魔力元件
    event.recipes.create.deploying('appbot:creative_mana_cell', ['kubejs:creative_empty_cell','megacells:mana_storage_cell_256m'])
    //创造物品
    event.recipes.create.mixing(['ae2:creative_item_cell'], ['appbot:creative_mana_cell','ae2:creative_fluid_cell','createaddition:creative_energy','kubejs:creative_empty_cell'])
})