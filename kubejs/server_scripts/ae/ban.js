ServerEvents.recipes(event => {
    //无线终端
    event.remove({ id: 'ae2wtlib:pattern_encoding/upgrade_wireless_pattern_encoding_terminal' })
    event.remove({ id: 'ae2:network/upgrade_wireless_crafting_terminal' })
})