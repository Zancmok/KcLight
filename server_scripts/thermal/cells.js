ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:energy_cell' })
    event.recipes.createDeploying('thermal:energy_cell', [
        'thermal:energy_cell_frame',
        'thermal:rf_coil',
    ])

    event.remove({ output: 'thermal:fluid_cell' })
    event.recipes.createDeploying('thermal:fluid_cell', [
        'thermal:fluid_cell_frame',
        'thermal:redstone_servo',
    ])

    event.remove({ output: 'thermal:machine_frame' })
    event.recipes.createMechanicalCrafting('thermal:machine_frame',
        [
            ' CCC ',
            'CGDGC',
            'CFAFC',
            'CBEBC',
            ' CCC '
        ],
        {
            A: 'create:andesite_casing',
            B: 'thermal:tin_gear',
            C: '#forge:glass',
            D: 'minecraft:iron_ingot',
            E: 'thermal:tin_ingot',
            F: 'projectred_core:red_ingot',
            G: 'thermal:iron_gear'
        })
})
