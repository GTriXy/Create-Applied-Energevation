StartupEvents.registry('item', event => {
    event.create('colorless_compound').texture('kubejs:item/colorless_compound').name(itemstack => '失色化合物')
    event.create('pointer').texture('kubejs:item/pointer').name(itemstack => '指针')
    event.create('creative_empty_cell').texture('kubejs:item/creative_empty_cell').name(itemstack => '空的创造ME元件')
})//