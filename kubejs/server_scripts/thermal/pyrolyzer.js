ServerEvents.recipes(event => {
    //焦煤
    event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_coal'})
	event.recipes.thermal.pyrolyzer(['thermal:coal_coke',Fluid.of('thermal:creosote',250)], 'minecraft:coal')
})