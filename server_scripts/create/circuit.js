ServerEvents.recipes(event => {
    event.remove({ output: 'create_new_age:blank_circuit' })
    event.recipes.createCompacting('4x create_new_age:blank_circuit', [
        'projectred_core:plate',
        'projectred_core:red_ingot',
        'minecraft:copper_ingot',
        'minecraft:quartz',
    ]).superheated()
})
