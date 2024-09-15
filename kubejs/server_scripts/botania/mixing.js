ServerEvents.recipes(event => {
    //符文祭坛
    event.remove({ output: 'botania:runic_altar' })
    event.recipes.create.mixing(['botania:runic_altar'], ['5x botania:livingrock','botania:mana_diamond','create:depot','2x create_sa:steam_engine'])
})