// Lead -> Overcharged Gold | Iron | Zinc

ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:lead_block' })
    event.remove({ output: 'thermal:lead_gear' })
    event.remove({ output: 'thermal:lead_plate' })
    event.remove({ output: 'thermal:lead_nugget' })
    event.remove({ output: 'thermal:lead_dust' })
    event.remove({ output: 'thermal:lead_ingot' })
    event.remove({ output: 'thermal:lead_coin' })

    event.replaceInput(
        { input: 'thermal:lead_ingot' },
        'thermal:lead_ingot',
        'create_new_age:overcharged_gold'
    )

    event.replaceInput(
        { input: 'thermal:lead_gear' },
        'thermal:lead_gear',
        'thermal:iron_gear',
    )

    event.replaceInput(
        { input: 'thermal:lead_plate' },
        'thermal:lead_plate',
        'create_new_age:overcharged_golden_sheet',
    )

    event.replaceInput(
        { input: 'thermal:lead_nugget' },
        'thermal:lead_nugget',
        'create:zinc_nugget'
    )
})
