JEIEvents.information(event => {
    event.addItem('kubejs:pointer', ['Error:NullPointException'])
    event.addItem('create:refined_radiance', ['光辉石是由异彩化合物在光源方块附近转化而来，机械手的合成表仅为查看异彩化合物使用'])
    event.addItem('create:shadow_steel', ['暗影钢是由异彩化合物在虚空中转化而来，机械手的合成表仅为查看异彩化合物使用'])
})

JEIEvents.hideItems(event => {
    event.hide('botania:mana_fluxfield')
    event.hide('create:sand_paper')
    event.hide('create:red_sand_paper')
    event.hide('tfmg:blast_furnace_output')
    event.hide('thermal:dynamo_stirling')
    event.hide('thermal:dynamo_magmatic')
    event.hide('thermal:dynamo_numismatic')
    event.hide('thermal:dynamo_lapidary')
    event.hide('thermal:dynamo_disenchantment')
    event.hide('thermal:dynamo_gourmand')
    event.hide('thermal_extra:dynamo_frost')
})