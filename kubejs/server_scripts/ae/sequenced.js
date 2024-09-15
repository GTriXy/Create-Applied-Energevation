ServerEvents.recipes(event => {
  //处理器
  event.remove({ output: 'ae2:logic_processor' })
  event.recipes.create.sequenced_assembly('ae2:logic_processor', 'ae2:printed_logic_processor', [
    event.recipes.createDeploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'tfmg:bitumen']),
    event.recipes.createPressing('ae2:printed_logic_processor', 'ae2:printed_logic_processor'),
    event.recipes.createDeploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'minecraft:redstone']),
  ]).transitionalItem('ae2:printed_logic_processor').loops(1)
  event.remove({ output: 'ae2:logic_processor' })
  event.recipes.create.sequenced_assembly('ae2:logic_processor', 'ae2:printed_logic_processor', [
    event.recipes.createDeploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'thermal:bitumen']),
    event.recipes.createPressing('ae2:printed_logic_processor', 'ae2:printed_logic_processor'),
    event.recipes.createDeploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'minecraft:redstone']),
  ]).transitionalItem('ae2:printed_logic_processor').loops(1)
  event.remove({ output: 'ae2:calculation_processor' })
  event.recipes.create.sequenced_assembly('ae2:calculation_processor', 'ae2:printed_calculation_processor', [
    event.recipes.createDeploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'tfmg:bitumen']),
    event.recipes.createPressing('ae2:printed_calculation_processor', 'ae2:printed_calculation_processor'),
    event.recipes.createDeploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'minecraft:redstone']),
  ]).transitionalItem('ae2:printed_calculation_processor').loops(1)
  event.recipes.create.sequenced_assembly('ae2:calculation_processor', 'ae2:printed_calculation_processor', [
    event.recipes.createDeploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'thermal:bitumen']),
    event.recipes.createPressing('ae2:printed_calculation_processor', 'ae2:printed_calculation_processor'),
    event.recipes.createDeploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'minecraft:redstone']),
  ]).transitionalItem('ae2:printed_calculation_processor').loops(1)
  event.remove({ output: 'ae2:engineering_processor' })
  event.recipes.create.sequenced_assembly('ae2:engineering_processor', 'ae2:printed_engineering_processor', [
    event.recipes.createDeploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'tfmg:bitumen']),
    event.recipes.createPressing('ae2:printed_engineering_processor', 'ae2:printed_engineering_processor'),
    event.recipes.createDeploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'minecraft:redstone']),
  ]).transitionalItem('ae2:printed_engineering_processor').loops(1)
  event.recipes.create.sequenced_assembly('ae2:engineering_processor', 'ae2:printed_engineering_processor', [
    event.recipes.createDeploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'thermal:bitumen']),
    event.recipes.createPressing('ae2:printed_engineering_processor', 'ae2:printed_engineering_processor'),
    event.recipes.createDeploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'minecraft:redstone']),
  ]).transitionalItem('ae2:printed_engineering_processor').loops(1)
  //累计处理器
  event.remove({ output: 'megacells:accumulation_processor' })
  event.recipes.create.sequenced_assembly('megacells:accumulation_processor', 'megacells:printed_accumulation_processor', [
    event.recipes.createDeploying('megacells:printed_accumulation_processor', ['megacells:printed_accumulation_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('megacells:printed_accumulation_processor', ['megacells:printed_accumulation_processor', 'thermal:bitumen']),
    event.recipes.createPressing('megacells:printed_accumulation_processor', 'megacells:printed_accumulation_processor'),
    event.recipes.createDeploying('megacells:printed_accumulation_processor', ['megacells:printed_accumulation_processor', 'ae2:fluix_dust']),
  ]).transitionalItem('megacells:printed_accumulation_processor').loops(1)
  event.recipes.create.sequenced_assembly('megacells:accumulation_processor', 'megacells:printed_accumulation_processor', [
    event.recipes.createDeploying('megacells:printed_accumulation_processor', ['megacells:printed_accumulation_processor', 'ae2:printed_silicon']),
    event.recipes.createDeploying('megacells:printed_accumulation_processor', ['megacells:printed_accumulation_processor', 'tfmg:bitumen']),
    event.recipes.createPressing('megacells:printed_accumulation_processor', 'megacells:printed_accumulation_processor'),
    event.recipes.createDeploying('megacells:printed_accumulation_processor', ['megacells:printed_accumulation_processor', 'ae2:fluix_dust']),
  ]).transitionalItem('megacells:printed_accumulation_processor').loops(1)
  //累计电路板
  event.remove({ output: 'megacells:printed_accumulation_processor' })
  event.recipes.create.sequenced_assembly('megacells:printed_accumulation_processor', 'megacells:sky_steel_ingot', [
    event.recipes.createDeploying('megacells:sky_steel_ingot', ['megacells:sky_steel_ingot', 'megacells:accumulation_processor_press']).keepHeldItem(),
    event.recipes.createPressing('megacells:sky_steel_ingot', 'megacells:sky_steel_ingot'),
  ]).transitionalItem('megacells:sky_steel_ingot').loops(1)
})