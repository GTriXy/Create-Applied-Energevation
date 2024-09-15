ServerEvents.recipes(event => {
	//坚固板
	event.remove({ output: 'create:sturdy_sheet' })
	event.recipes.create.sequenced_assembly('create:sturdy_sheet', 'minecraft:obsidian', [
		event.recipes.createFilling('minecraft:obsidian', ['minecraft:obsidian', Fluid.lava(500)]),
		event.recipes.createPressing('minecraft:obsidian', 'minecraft:obsidian'),
		event.recipes.createDeploying('minecraft:obsidian', ['minecraft:obsidian', 'create:andesite_alloy']),
		event.recipes.createPressing('minecraft:obsidian', 'minecraft:obsidian')
	]).transitionalItem('minecraft:obsidian').loops(1)
	//蒸汽引擎
	event.remove({ output: 'create_sa:steam_engine' })
	event.recipes.create.sequenced_assembly('create_sa:steam_engine', 'create:precision_mechanism', [
		event.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'thermal:electrum_plate']),
		event.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'create:propeller']),
		event.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'create:cogwheel']),
		event.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'create:electron_tube']),
		event.recipes.createPressing('create:precision_mechanism', 'create:precision_mechanism')
	]).transitionalItem('create:precision_mechanism').loops(3)
	//涡轮叶片
	event.remove({ output: 'tfmg:turbine_blade' })
	event.recipes.create.sequenced_assembly('tfmg:turbine_blade', 'create:propeller', [
		event.recipes.createCutting('create:propeller', 'create:propeller'),
		event.recipes.createDeploying('create:propeller', ['create:propeller', 'create:sturdy_sheet']),
		event.recipes.createPressing('create:propeller', 'create:propeller'),
		event.recipes.createDeploying('create:propeller', ['create:propeller', 'tfmg:aluminum_ingot']),
		event.recipes.createDeploying('create:propeller', ['create:propeller', 'create_new_age:blank_circuit']),
		event.recipes.createPressing('create:propeller', 'create:propeller')
	]).transitionalItem('create:propeller').loops(4)
	//引擎燃烧室
	event.remove({ output: 'tfmg:engine_chamber' })
	event.recipes.create.sequenced_assembly('tfmg:engine_chamber', 'tfmg:steel_ingot', [
		event.recipes.createDeploying('tfmg:steel_ingot', ['tfmg:steel_ingot', 'tfmg:aluminum_ingot']),
		event.recipes.createPressing('tfmg:steel_ingot', 'tfmg:steel_ingot'),
		event.recipes.createDeploying('tfmg:steel_ingot', ['tfmg:steel_ingot', 'tfmg:steel_mechanism']),
		event.recipes.createDeploying('tfmg:steel_ingot', ['tfmg:steel_ingot', 'tfmg:spark_plug']),
		event.recipes.createCutting('tfmg:steel_ingot', ['tfmg:steel_ingot', 'create_new_age:blank_circuit']),
		event.recipes.createPressing('tfmg:steel_ingot', 'tfmg:steel_ingot')
	]).transitionalItem('tfmg:steel_ingot').loops(1)
	event.recipes.create.sequenced_assembly('tfmg:engine_chamber', 'thermal:steel_ingot', [
		event.recipes.createDeploying('thermal:steel_ingot', ['thermal:steel_ingot', 'tfmg:aluminum_ingot']),
		event.recipes.createPressing('thermal:steel_ingot', 'thermal:steel_ingot'),
		event.recipes.createDeploying('thermal:steel_ingot', ['thermal:steel_ingot', 'tfmg:steel_mechanism']),
		event.recipes.createDeploying('thermal:steel_ingot', ['thermal:steel_ingot', 'tfmg:spark_plug']),
		event.recipes.createCutting('thermal:steel_ingot', ['thermal:steel_ingot', 'create_new_age:blank_circuit']),
		event.recipes.createPressing('thermal:steel_ingot', 'thermal:steel_ingot')
	]).transitionalItem('thermal:steel_ingot').loops(1)
	//引擎基座
	event.remove({ output: 'tfmg:engine_base' })
	event.recipes.create.sequenced_assembly('tfmg:engine_base', 'tfmg:heavy_machinery_casing', [
		event.recipes.createCutting('tfmg:heavy_machinery_casing', 'tfmg:heavy_machinery_casing'),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:heavy_plate']),
		event.recipes.createPressing('tfmg:heavy_machinery_casing', 'tfmg:heavy_machinery_casing'),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'create:shaft']),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:heavy_plate']),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:engine_chamber'])
	]).transitionalItem('tfmg:heavy_machinery_casing').loops(1)
	//涡轮引擎
	event.remove({ output: 'tfmg:engine_base' })
	event.recipes.create.sequenced_assembly('tfmg:engine_base', 'tfmg:heavy_machinery_casing', [
		event.recipes.createCutting('tfmg:heavy_machinery_casing', 'tfmg:heavy_machinery_casing'),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:heavy_plate']),
		event.recipes.createPressing('tfmg:heavy_machinery_casing', 'tfmg:heavy_machinery_casing'),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'create:shaft']),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:heavy_plate']),
		event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:engine_chamber'])
	]).transitionalItem('tfmg:heavy_machinery_casing').loops(1)
	//热力引擎
	event.remove({ output: 'create_sa:heat_engine' })
	event.recipes.create.sequenced_assembly('create_sa:heat_engine', 'ae2:engineering_processor', [
		event.recipes.createDeploying('ae2:engineering_processor', ['ae2:engineering_processor', 'tfmg:engine_base']),
		event.recipes.createPressing('ae2:engineering_processor', 'ae2:engineering_processor'),
		event.recipes.createDeploying('ae2:engineering_processor', ['ae2:engineering_processor', 'create:zinc_ingot']),
		event.recipes.createDeploying('ae2:engineering_processor', ['ae2:engineering_processor', 'ae2:matter_ball']),
		event.recipes.createPressing('ae2:engineering_processor', 'ae2:engineering_processor'),
		event.recipes.createDeploying('ae2:engineering_processor', ['ae2:engineering_processor', '#forge:plates/copper'])
	]).transitionalItem('ae2:engineering_processor').loops(2)
	//金磁铁
	event.remove({ output: 'create_new_age:layered_magnet' })
	event.recipes.create.sequenced_assembly('create_new_age:layered_magnet', 'create_new_age:redstone_magnet', [
		event.recipes.createDeploying('create_new_age:redstone_magnet', ['create_new_age:redstone_magnet', 'botania:alchemy_catalyst']),
		event.recipes.createDeploying('create_new_age:redstone_magnet', ['create_new_age:redstone_magnet', 'minecraft:iron_ingot']),
	]).transitionalItem('create_new_age:redstone_magnet').loops(1)
	//蒸汽引擎
	event.remove({ output: 'create_sa:hydraulic_engine' })
	event.recipes.create.sequenced_assembly('create_sa:hydraulic_engine', 'create_new_age:copper_circuit', [
		event.recipes.createFilling('create_new_age:copper_circuit', ['create_new_age:copper_circuit', Fluid.water(250)]),
		event.recipes.createPressing('create_new_age:copper_circuit', 'create_new_age:copper_circuit'),
		event.recipes.createDeploying('create_new_age:copper_circuit', ['create_new_age:copper_circuit', 'create:steam_engine']),
		event.recipes.createDeploying('create_new_age:copper_circuit', ['create_new_age:copper_circuit', 'createaddition:gold_spool']),
		event.recipes.createDeploying('create_new_age:copper_circuit', ['create_new_age:copper_circuit', 'create_new_age:overcharged_iron_sheet']),
		event.recipes.createPressing('create_new_age:copper_circuit', 'create_new_age:copper_circuit'),
	]).transitionalItem('create_new_age:copper_circuit').loops(3)
	//mending_rune
	event.remove({ output: 'create_things_and_misc:mending_rune' })
	event.recipes.create.sequenced_assembly('create_things_and_misc:mending_rune', 'create_things_and_misc:experience_sheet', [
		event.recipes.createDeploying('create_things_and_misc:experience_sheet', ['create_things_and_misc:experience_sheet', 'create:precision_mechanism']),
		event.recipes.createDeploying('create_things_and_misc:experience_sheet', ['create_things_and_misc:experience_sheet', 'create_sa:steam_engine']),
		event.recipes.createDeploying('create_things_and_misc:experience_sheet', ['create_things_and_misc:experience_sheet', 'tfmg:steel_mechanism']),
		event.recipes.createDeploying('create_things_and_misc:experience_sheet', ['create_things_and_misc:experience_sheet', 'create_sa:heat_engine']),
		event.recipes.createDeploying('create_things_and_misc:experience_sheet', ['create_things_and_misc:experience_sheet', 'create_sa:hydraulic_engine']),
		event.recipes.createDeploying('create_things_and_misc:experience_sheet', ['create_things_and_misc:experience_sheet', 'create_things_and_misc:vibration_mechanism']),
	]).transitionalItem('create_new_age:copper_circuit').loops(1)
	//振动
	event.remove({ output: 'create_things_and_misc:vibration_mechanism' })
	event.recipes.create.sequenced_assembly('create_things_and_misc:vibration_mechanism', 'create_things_and_misc:rose_quartz_sheet', [
		event.recipes.createDeploying('create_things_and_misc:rose_quartz_sheet', ['create_things_and_misc:rose_quartz_sheet', 'minecraft:amethyst_shard']),
		event.recipes.createDeploying('create_things_and_misc:rose_quartz_sheet', ['create_things_and_misc:rose_quartz_sheet', 'thermal:hazmat_fabric']),
		event.recipes.createDeploying('create_things_and_misc:rose_quartz_sheet', ['create_things_and_misc:rose_quartz_sheet', 'create:cogwheel']),
		event.recipes.createDeploying('create_things_and_misc:rose_quartz_sheet', ['create_things_and_misc:rose_quartz_sheet', 'minecraft:redstone']),
		event.recipes.createPressing('create_things_and_misc:rose_quartz_sheet', ['create_things_and_misc:rose_quartz_sheet', 'create_sa:hydraulic_engine']),
	]).transitionalItem('create_new_age:copper_circuit').loops(3)
	//钢铁构件
	event.recipes.create.sequenced_assembly([Item.of('tfmg:steel_mechanism').withChance(0.83),  Item.of('tfmg:aluminum_ingot').withChance(0.09), Item.of('tfmg:industrial_pipe').withChance(0.08) ], 'tfmg:heavy_plate', [
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', '#forge:ingots/steel']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', '#forge:ingots/aluminum']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver']),
	]).transitionalItem('tfmg:unfinished_steel_mechanism').loops(2)
	//精密构件
	event.remove({ output: 'create:precision_mechanism' })
	event.custom(
		{
			"type": "create:sequenced_assembly",
			"ingredient": {
			  "tag": "forge:plates/gold"
			},
			"transitionalItem": {
			  "item": "create:incomplete_precision_mechanism"
			},
			"sequence": [
			  {
				"type": "create:deploying",
				"ingredients": [
				  {
					"item": "create:incomplete_precision_mechanism"
				  },
				  {
					"item": "create:cogwheel"
				  }
				],
				"results": [
				  {
					"item": "create:incomplete_precision_mechanism"
				  }
				]
			  },
			  {
				"type": "create:deploying",
				"ingredients": [
				  {
					"item": "create:incomplete_precision_mechanism"
				  },
				  {
					"item": "create:large_cogwheel"
				  }
				],
				"results": [
				  {
					"item": "create:incomplete_precision_mechanism"
				  }
				]
			  },
			  {
				"type": "create:deploying",
				"ingredients": [
				  {
					"item": "create:incomplete_precision_mechanism"
				  },
				  {
					"tag": "forge:nuggets/iron"
				  }
				],
				"results": [
				  {
					"item": "create:incomplete_precision_mechanism"
				  }
				]
			  }
			],
			"results": [
			  {
				"item": "create:precision_mechanism",
				"chance": 120.0
			  },
			  {
				"item": "create:andesite_alloy",
				"chance": 8.0
			  },
			  {
				"item": "create:cogwheel",
				"chance": 7.0
			  },
			  {
				"item": "minecraft:gold_nugget",
				"chance": 5.0
			  },
			  {
				"item": "create:shaft",
				"chance": 4.0
			  },
			  {
				"item": "create:crushed_raw_gold",
				"chance": 4.0
			  },
			  {
				"item": "minecraft:iron_ingot"
			  },
			  {
				"item": "minecraft:clock"
			  }
			],
			"loops": 5
		  }
	)
})