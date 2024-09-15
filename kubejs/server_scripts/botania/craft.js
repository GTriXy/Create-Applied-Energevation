ServerEvents.recipes(event => {
    //花药台
    event.replaceInput([{ output: 'botania:apothecary_default'},{ output: 'botania:apothecary_mossy'},{ output: 'botania:apothecary_deepslate'}],'#botania:petals','create:andesite_alloy')
    //凝聚板
    event.replaceInput([{ output: 'botania:terra_plate'}],'minecraft:lapis_block','tfmg:plastic_block')
    event.replaceInput([{ output: 'botania:terra_plate'}],'botania:rune_mana','ae2:engineering_processor')
    //炼金催化器
    event.replaceInput([{ output: 'botania:alchemy_catalyst'}],'minecraft:brewing_stand','tfmg:napalm_bucket')
    //精灵凝聚板
    event.replaceInput([{ output: 'mythicbotany:mana_infuser'}],'botania:elementium_ingot','thermal:hazmat_fabric')
    //盖亚水晶
    event.remove({ output: 'botania:gaia_pylon' })
    event.shaped(
        Item.of('botania:gaia_pylon'), [
        ' A ',
        'BCB',
        ' D '
    ],
        {
            A: 'botania:pixie_dust',
            B: 'botania:elementium_ingot',
            C: 'mythicbotany:alfsteel_pylon',
            D:'create_sa:hydraulic_engine'
        }
    )
})