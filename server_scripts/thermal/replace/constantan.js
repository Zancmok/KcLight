// Constantan -> Bronze

ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:constantan_block' })
    event.remove({ output: 'thermal:constantan_gear' })
    event.remove({ output: 'thermal:constantan_plate' })
    event.remove({ output: 'thermal:constantan_nugget' })
    event.remove({ output: 'thermal:constantan_dust' })
    event.remove({ output: 'thermal:constantan_ingot' })
    event.remove({ output: 'thermal:constantan_coin' })

    event.replaceInput(
        { input: 'thermal:constantan_ingot' },
        'thermal:constantan_ingot',
        'thermal:bronze_ingot'
    )

    event.replaceInput(
        { input: 'thermal:constantan_gear' },
        'thermal:constantan_gear',
        'thermal:bronze_gear',
    )

    event.replaceInput(
        { input: 'thermal:constantan_plate' },
        'thermal:constantan_plate',
        'thermal:bronze_plate',
    )
})
