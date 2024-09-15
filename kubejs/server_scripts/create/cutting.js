ServerEvents.recipes(event => {
    //铜导线
    event.remove({ output: 'create_new_age:copper_wire' })
    event.stonecutting('2x create_new_age:copper_wire', 'createaddition:copper_spool')
})