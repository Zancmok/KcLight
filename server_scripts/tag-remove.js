ServerEvents.tags('item', event => {
    // Thermal
    // Plates
    event.remove('forge:plates/iron', 'thermal:iron_plate')
    event.remove('forge:plates/gold', 'thermal:gold_plate')
    event.remove('forge:plates/copper', 'thermal:copper_plate')
})
