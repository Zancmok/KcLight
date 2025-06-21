ServerEvents.recipes(event => {
    // Alloys
    event.recipes.createMixing('4x thermal:bronze_ingot', [
        'thermal:tin_ingot',
        '3x minecraft:copper_ingot'
    ]).heated()

    event.recipes.createMixing('2x thermal:electrum_ingot', [
        'create_new_age:overcharged_iron',
        'minecraft:gold_ingot'
    ]).heated()

    event.recipes.createMixing('4x thermal:signalum_ingot', [
        'create_new_age:overcharged_iron',
        '3x minecraft:copper_ingot',
        '4x minecraft:redstone'
    ]).superheated()

    event.recipes.createMixing('4x thermal:lumium_ingot', [
        'create_new_age:overcharged_iron',
        '3x thermal:tin_ingot',
        '2x minecraft:glowstone_dust'
    ]).superheated()

    event.recipes.createMixing('2x thermal:enderium_ingot', [
        '3x create_new_age:overcharged_gold',
        'thermal:diamond_dust',
        '2x minecraft:ender_pearl'
    ]).superheated()

    // Plating
    event.recipes.createPressing('thermal:netherite_plate', 'minecraft:netherite_ingot')
    event.recipes.createPressing('thermal:tin_plate', 'thermal:tin_ingot')
    event.recipes.createPressing('thermal:bronze_plate', 'thermal:bronze_ingot')
    event.recipes.createPressing('thermal:electrum_plate', 'thermal:electrum_ingot')
    event.recipes.createPressing('thermal:signalum_plate', 'thermal:signalum_ingot')
    event.recipes.createPressing('thermal:lumium_plate', 'thermal:lumium_ingot')
    event.recipes.createPressing('thermal:enderium_plate', 'thermal:enderium_ingot')

    // Dust Milling
    event.recipes.createMilling('thermal:niter_dust', 'thermal:niter')
    event.recipes.createMilling('thermal:sulfur_dust', 'thermal:sulfur')
    event.recipes.createMilling('thermal:ender_pearl_dust', 'minecraft:ender_pearl')
    event.recipes.createMilling('thermal:iron_dust', 'minecraft:iron_ingot')
    event.recipes.createMilling('thermal:iron_dust', 'create:iron_sheet')
    event.recipes.createMilling('thermal:gold_dust', 'minecraft:gold_ingot')
    event.recipes.createMilling('thermal:gold_dust', 'create:golden_sheet')
    event.recipes.createMilling('thermal:copper_dust', 'minecraft:copper_ingot')
    event.recipes.createMilling('thermal:copper_dust', 'create:copper_sheet')
    event.recipes.createMilling('thermal:netherite_dust', 'minecraft:netherite_ingot')
    event.recipes.createMilling('thermal:netherite_dust', 'thermal:netherite_plate')
    event.recipes.createMilling('thermal:tin_dust', 'thermal:tin_ingot')
    event.recipes.createMilling('thermal:tin_dust', 'thermal:tin_plate')
    // event.recipes.createMilling('thermal:lapis_dust', 'minecraft:lapis_lazuli')
    // No lapis cuz blue color ):
    event.recipes.createMilling('thermal:diamond_dust', 'minecraft:diamond')
    event.recipes.createMilling('thermal:emerald_dust', 'minecraft:emerald')
    event.recipes.createMilling('thermal:quartz_dust', 'minecraft:quartz')
})
