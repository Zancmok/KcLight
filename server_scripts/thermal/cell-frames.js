ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:energy_cell_frame' })
    event.shaped('thermal:energy_cell_frame', [
            'ABA',
            'BCB',
            'ABA'
        ],{
            A: 'create:sturdy_sheet',
            B: 'create:brass_sheet',
            C: 'thermal:machine_frame',
        }
    )

    event.remove({ output: 'thermal:fluid_cell_frame' })
    event.shaped('thermal:fluid_cell_frame', [
            'ABA',
            'BCB',
            'ABA'
        ],{
            A: 'create:copper_sheet',
            B: '#thermal:glass/hardened',
            C: 'thermal:machine_frame',
        }
    )
})
