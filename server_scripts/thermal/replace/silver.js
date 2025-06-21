// Silver -> Overcharged Iron | Iron

ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:silver_block' })
    event.remove({ output: 'thermal:silver_gear' })
    event.remove({ output: 'thermal:silver_plate' })
    event.remove({ output: 'thermal:silver_nugget' })
    event.remove({ output: 'thermal:silver_dust' })
    event.remove({ output: 'thermal:silver_ingot' })
    event.remove({ output: 'thermal:silver_coin' })

    event.replaceInput(
        { input: 'thermal:silver_ingot' },
        'thermal:silver_ingot',
        'create_new_age:overcharged_iron'
    )

    event.replaceInput(
        { input: 'thermal:silver_gear' },
        'thermal:silver_gear',
        'thermal:iron_gear',
    )

    event.replaceInput(
        { input: 'thermal:silver_plate' },
        'thermal:silver_plate',
        'create_new_age:overcharged_iron_sheet',
    )
})
