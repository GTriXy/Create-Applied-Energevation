ServerEvents.recipes(event => {
    //末影抽屉
    event.remove({ output: 'functionalstorage:ender_drawer' })
    event.shaped(
        Item.of('functionalstorage:ender_drawer',4), [
        'AAA',
        'BCB',
        'AAA'
    ],
        {
            A: '#minecraft:planks',
            B: '#functionalstorage:drawer',
            C:'createendertransmission:item_transmitter'
        }
    )
    //存储控制器
    event.replaceInput([{ output: 'functionalstorage:storage_controller'}],'minecraft:comparator','create:stockpile_switch')
})