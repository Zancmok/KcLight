ServerEvents.recipes(event => {
    // CB Microblocks
    event.remove({ mod: 'cb_microblock' })

    // Thermal
    // Plates
    event.remove({ output: 'thermal:iron_plate' })
    event.remove({ output: 'thermal:gold_plate' })
    event.remove({ output: 'thermal:copper_plate' })

    // Dynamos
    event.remove({ output: 'thermal:dynamo_stirling' })
    event.remove({ output: 'thermal:dynamo_compression' })
    event.remove({ output: 'thermal:dynamo_magmatic' })
    event.remove({ output: 'thermal:dynamo_numismatic' })
    event.remove({ output: 'thermal:dynamo_lapidary' })
    event.remove({ output: 'thermal:dynamo_disenchantment' })
    event.remove({ output: 'thermal:dynamo_gourmand' })

    // Crates
    event.remove({ output: 'thermal:sugar_cane_block' })
    event.remove({ input: 'thermal:sugar_cane_block' })
    event.remove({ output: 'thermal:apple_block' })
    event.remove({ input: 'thermal:apple_block' })
    event.remove({ output: 'thermal:carrot_block' })
    event.remove({ input: 'thermal:carrot_block' })
    event.remove({ output: 'thermal:potato_block' })
    event.remove({ input: 'thermal:potato_block' })
    event.remove({ output: 'thermal:beetroot_block' })
    event.remove({ input: 'thermal:beetroot_block' })

    // Compressed Blocks
    event.remove({ output: 'thermal:charcoal_block' })
    event.remove({ input: 'thermal:charcoal_block' })
    event.remove({ output: 'thermal:gunpowder_block' })
    event.remove({ input: 'thermal:gunpowder_block' })

    // Cables
    event.remove({ output: 'thermal:energy_duct' })
    event.remove({ output: 'thermal:fluid_duct' })
    event.remove({ output: 'thermal:fluid_duct_windowed' })

    // Fire Alloying
    event.remove({ id: 'thermal:fire_charge/signalum_glass_2' })
    event.remove({ id: 'thermal:fire_charge/electrum_ingot_2' })
    event.remove({ id: 'thermal:fire_charge/bronze_ingot_4' })
    event.remove({ id: 'thermal:fire_charge/electrum_ingot_5' })
    event.remove({ id: 'thermal:fire_charge/enderium_glass_2' })
    event.remove({ id: 'thermal:fire_charge/signalum_ingot_4' })
    event.remove({ id: 'thermal:fire_charge/obsidian_glass_2' })
    event.remove({ id: 'thermal:fire_charge/lumium_glass_2' })
    event.remove({ id: 'thermal:fire_charge/lumium_ingot_4' })
    event.remove({ id: 'thermal:fire_charge/enderium_ingot_2' })

    // Blends
    event.remove({ id: 'thermal:bronze_dust_4' })
    event.remove({ id: 'thermal:electrum_dust_2' })
    event.remove({ id: 'thermal:signalum_dust_4' })
    event.remove({ id: 'thermal:lumium_dust_4' })
    event.remove({ id: 'thermal:enderium_dust_2' })

    // Coins
    event.remove({ output: 'thermal:iron_coin' })
    event.remove({ output: 'thermal:gold_coin' })
    event.remove({ output: 'thermal:copper_coin' })
    event.remove({ output: 'thermal:netherite_coin' })
    event.remove({ output: 'thermal:tin_coin' })
    event.remove({ output: 'thermal:bronze_coin' })
    event.remove({ output: 'thermal:electrum_coin' })
    event.remove({ output: 'thermal:signalum_coin' })
    event.remove({ output: 'thermal:lumium_coin' })
    event.remove({ output: 'thermal:enderium_coin' })

    // Create
    // New Age
    event.remove({ id: 'create_new_age:enchanted_golden_apple' })
    event.remove({ id: 'create_new_age:energising/splash_water_bottle' })
    // Enchantment Industry
    event.remove({ id: 'create_enchantment_industry:mixing/hyper_experience' })
    // Ore Excavation
    event.remove({ id: 'createoreexcavation:ore_vein_type/diamond' })
    event.remove({ id: 'createoreexcavation:drilling/diamond' })
    event.remove({ id: 'createoreexcavation:ore_vein_type/hardened_diamond' })
    event.remove({ id: 'createoreexcavation:drilling/hardened_diamond' })
    event.remove({ id: 'createoreexcavation:ore_vein_type/gold' })
    event.remove({ id: 'createoreexcavation:drilling/gold' })
    event.remove({ id: 'createoreexcavation:ore_vein_type/emerald' })
    event.remove({ id: 'createoreexcavation:drilling/emerald' })

    // Sophisticated Backpacks
    event.remove({ output: 'sophisticatedbackpacks:advanced_void_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:inception_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:void_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:stack_downgrade_tier_1' })
    event.remove({ output: 'sophisticatedbackpacks:stack_downgrade_tier_2' })
    event.remove({ output: 'sophisticatedbackpacks:stack_downgrade_tier_3' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_starter_tier' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
})
