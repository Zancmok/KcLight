// Nickel -> Brass | Tin

ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:nickel_block' })
    event.remove({ output: 'thermal:nickel_gear' })
    event.remove({ output: 'thermal:nickel_plate' })
    event.remove({ output: 'thermal:nickel_nugget' })
    event.remove({ output: 'thermal:nickel_dust' })
    event.remove({ output: 'thermal:nickel_ingot' })
    event.remove({ output: 'thermal:nickel_coin' })

    event.replaceInput(
        { input: 'thermal:nickel_ingot' },
        'thermal:nickel_ingot',
        'create:brass_ingot'
    )

    event.replaceInput(
        { input: 'thermal:nickel_gear' },
        'thermal:nickel_gear',
        'thermal:tin_gear',
    )

    event.replaceInput(
        { input: 'thermal:nickel_plate' },
        'thermal:nickel_plate',
        'create:brass_sheet',
    )
})
