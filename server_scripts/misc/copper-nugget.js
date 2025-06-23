ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'create:copper_nugget' },
        'create:copper_nugget',
        'pneumaticcraft:copper_nugget'
    )
    event.remove({ output: 'create:copper_nugget' })
    event.remove({ id: 'thermal:storage/copper_ingot_from_nuggets' })

    event.replaceInput(
        { input: 'thermal:copper_nugget' },
        'thermal:copper_nugget',
        'pneumaticcraft:copper_nugget'
    )
    event.remove({ output: 'thermal:copper_nugget' })
    event.remove({ id: 'create:crafting/materials/copper_ingot' })
})
