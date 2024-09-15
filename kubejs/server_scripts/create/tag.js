ServerEvents.tags('item', event => {
    event.add('forge:dusts/sulfur', 'tfmg:sulfur_dust')
    event.add('forge:dusts/niter', 'tfmg:nitrate_dust')
    event.add('forge:coal_coke', 'tfmg:coal_coke')
})

ServerEvents.tags('fluid', event => {
    event.add('forge:creosote', 'tfmg:creosote')
    event.add('forge:diesel', 'tfmg:diesel')
    event.add('forge:gasoline', 'tfmg:gasoline')
})