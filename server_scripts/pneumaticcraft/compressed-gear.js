ServerEvents.recipes(event => {
    event.remove({ output: 'pneumaticcraft:compressed_iron_gear' })
    event.shaped('pneumaticcraft:compressed_iron_gear', [
            ' A ',
            'ABA',
            ' A '
        ],{
            A: 'pneumaticcraft:ingot_iron_compressed',
            B: 'minecraft:iron_nugget',
        }
    )

    event.recipes.thermal.press(
        'pneumaticcraft:compressed_iron_gear',
        [
            '4x pneumaticcraft:ingot_iron_compressed',
            'thermal:press_gear_die'
        ]
    )
})
