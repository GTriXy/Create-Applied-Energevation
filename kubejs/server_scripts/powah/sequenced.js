ServerEvents.recipes(event => {
    //绝缘覆层
    event.remove({ output: 'powah:dielectric_paste' })
	event.recipes.create.sequenced_assembly('8x powah:dielectric_paste', 'minecraft:ochre_froglight', [ 
        event.recipes.createPressing('minecraft:ochre_froglight', 'minecraft:ochre_froglight'),
		event.recipes.createDeploying('minecraft:ochre_froglight', ['minecraft:ochre_froglight', 'thermal:tar']),
        event.recipes.createDeploying('minecraft:ochre_froglight', ['minecraft:ochre_froglight', 'minecraft:amethyst_cluster']),
        event.recipes.createPressing('minecraft:ochre_froglight', 'minecraft:ochre_froglight'),
        event.recipes.createFilling('minecraft:obsidian', ['minecraft:obsidian', Fluid.of('thermal:refined_fuel',350)]),
        event.recipes.createDeploying('minecraft:ochre_froglight', ['minecraft:ochre_froglight', 'minecraft:black_dye']),
		event.recipes.createCutting('minecraft:ochre_froglight', 'minecraft:ochre_froglight')
	]).transitionalItem('minecraft:ochre_froglight').loops(1) 
    event.recipes.create.sequenced_assembly('8x powah:dielectric_paste', 'minecraft:verdant_froglight', [ 
        event.recipes.createPressing('minecraft:verdant_froglight', 'minecraft:verdant_froglight'),
		event.recipes.createDeploying('minecraft:verdant_froglight', ['minecraft:verdant_froglight', 'thermal:tar']),
        event.recipes.createDeploying('minecraft:verdant_froglight', ['minecraft:verdant_froglight', 'minecraft:amethyst_cluster']),
        event.recipes.createPressing('minecraft:verdant_froglight', 'minecraft:verdant_froglight'),
        event.recipes.createFilling('minecraft:obsidian', ['minecraft:obsidian', Fluid.of('thermal:refined_fuel',350)]),
        event.recipes.createDeploying('minecraft:verdant_froglight', ['minecraft:verdant_froglight', 'minecraft:black_dye']),
		event.recipes.createCutting('minecraft:verdant_froglight', 'minecraft:verdant_froglight')
	]).transitionalItem('minecraft:verdant_froglight').loops(1) 
    event.recipes.create.sequenced_assembly('8x powah:dielectric_paste', 'minecraft:pearlescent_froglight', [ 
        event.recipes.createPressing('minecraft:pearlescent_froglight', 'minecraft:pearlescent_froglight'),
		event.recipes.createDeploying('minecraft:pearlescent_froglight', ['minecraft:pearlescent_froglight', 'thermal:tar']),
        event.recipes.createDeploying('minecraft:pearlescent_froglight', ['minecraft:pearlescent_froglight', 'minecraft:amethyst_cluster']),
        event.recipes.createPressing('minecraft:pearlescent_froglight', 'minecraft:pearlescent_froglight'),
        event.recipes.createFilling('minecraft:obsidian', ['minecraft:obsidian', Fluid.of('thermal:refined_fuel',350)]),
        event.recipes.createDeploying('minecraft:pearlescent_froglight', ['minecraft:pearlescent_froglight', 'minecraft:black_dye']),
		event.recipes.createCutting('minecraft:pearlescent_froglight', 'minecraft:pearlescent_froglight')
	]).transitionalItem('minecraft:pearlescent_froglight').loops(1) 
})//