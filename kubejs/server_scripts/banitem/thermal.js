ServerEvents.recipes(event => {
    event.remove({ id: 'thermal:machines/press/press_vine_to_latex' })
    event.remove({ id: 'thermal:machines/press/press_dandelion_to_latex' })
    event.remove({ id: 'thermal:beekeeper_fabric' })
})