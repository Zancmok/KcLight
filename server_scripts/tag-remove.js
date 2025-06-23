ServerEvents.tags('item', event => {
    // Thermal
    // Plates
    event.remove('forge:plates/iron', 'thermal:iron_plate')
    event.remove('forge:plates/gold', 'thermal:gold_plate')
    event.remove('forge:plates/copper', 'thermal:copper_plate')

    // Copper Nuggets
    event.remove('forge:nuggets/copper', 'create:copper_nugget')
    event.remove('forge:nuggets/copper', 'thermal:copper_nugget')
})
