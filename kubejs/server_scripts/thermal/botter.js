ServerEvents.recipes(event => {
    //毒害隔离织物
    event.recipes.thermal.bottler('thermal:hazmat_fabric', ['thermal:diving_fabric',Fluid.of('thermal:redstone',2000)])
})