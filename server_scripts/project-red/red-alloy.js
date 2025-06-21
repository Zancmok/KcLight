ServerEvents.recipes(event => {
    event.remove({ output: 'projectred_core:red_iron_comp' })
    event.remove({ output: 'projectred_core:red_ingot' })

    event.recipes.createMixing('projectred_core:red_ingot', [
        'minecraft:iron_ingot',
        'minecraft:redstone',
        'minecraft:redstone'
    ]).heated()

    event.recipes.thermal.smelter('projectred_core:red_ingot', [
        'minecraft:iron_ingot',
        '2x minecraft:redstone'
    ])

    event.recipes.createMixing('projectred_core:red_ingot', [
        'thermal:tin_ingot',
        'minecraft:redstone',
    ]).heated()

    event.recipes.thermal.smelter('projectred_core:red_ingot', [
        'thermal:tin_ingot',
        'minecraft:redstone'
    ])
})
