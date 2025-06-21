ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:rf_coil' })
    event.shaped('thermal:rf_coil', [
            '  A',
            ' B ',
            'A  '
        ],{
            A: 'create:golden_sheet',
            B: 'projectred_core:red_ingot'
        }
    )

    event.remove({ output: 'thermal:redstone_servo' })
    event.shaped('thermal:redstone_servo', [
            'A A',
            ' B ',
            'A A'
        ],{
            A: 'minecraft:redstone',
            B: 'minecraft:iron_ingot'
        }
    )
})
