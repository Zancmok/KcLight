// Invar -> Compressed Iron | Iron

ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:invar_block' })
    event.remove({ output: 'thermal:invar_gear' })
    event.remove({ output: 'thermal:invar_plate' })
    event.remove({ output: 'thermal:invar_nugget' })
    event.remove({ output: 'thermal:invar_dust' })
    event.remove({ output: 'thermal:invar_ingot' })
    event.remove({ output: 'thermal:invar_coin' })

    event.replaceInput(
        { input: 'thermal:invar_ingot' },
        'thermal:invar_ingot',
        'pneumaticcraft:ingot_iron_compressed'
    )

    event.replaceInput(
        { input: 'thermal:invar_gear' },
        'thermal:invar_gear',
        'pneumaticcraft:compressed_iron_gear',
    )

    event.replaceInput(
        { input: 'thermal:invar_plate' },
        'thermal:invar_plate',
        'create:iron_sheet',
    )
})
