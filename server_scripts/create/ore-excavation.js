ServerEvents.recipes(event => {
    // Oil
    event.custom({
        "type": "createoreexcavation:vein",
        "amountMax": 2.0,
        "amountMin": 1.0,
        "biomeWhitelist": "minecraft:is_overworld",
        "icon": {
            "item": "pneumaticcraft:oil_bucket"
        },
        "name": "Crude Oil",
        "neverFinite": true,
        "placement": {
            "salt": 921304578,
            "separation": 8,
            "spacing": 64
        },
        "priority": 0
    }).id("createoreexcavation:ore_vein_type/oil")

    // Magnetite
    event.custom({
        "type": "createoreexcavation:vein",
        "amountMax": 3.0,
        "amountMin": 1.0,
        "biomeWhitelist": "minecraft:is_overworld",
        "icon": {
            "item": "create_new_age:magnetite_block"
        },
        "name": "Magnetite",
        "placement": {
            "salt": 244884670,
            "separation": 128,
            "spacing": 512
        },
        "priority": 0
    }).id("createoreexcavation:ore_vein_type/magnetite")

    // Tin
    event.custom({
        "type": "createoreexcavation:vein",
        "amountMax": 30.0,
        "amountMin": 10.0,
        "biomeWhitelist": "minecraft:is_overworld",
        "icon": {
            "item": "thermal:raw_tin"
        },
        "name": "Tin",
        "placement": {
            "salt": 1544847576,
            "separation": 8,
            "spacing": 128
        },
        "priority": 0
    }).id("createoreexcavation:ore_vein_type/tin")

    // Oil drilling
    event.custom({
        "type": "createoreexcavation:extracting",
        "drill": {
            "tag": "createoreexcavation:drills"
        },
        "output": {
            "amount": 500,
            "fluid": "pneumaticcraft:oil"
        },
        "priority": 0,
        "stress": 256,
        "ticks": 20,
        "vein_id": "createoreexcavation:ore_vein_type/oil"
    })

    // Magnetite drilling
    event.custom({
        "type": "createoreexcavation:drilling",
        "drill": {
            "tag": "createoreexcavation:drills"
        },
        "output": [
            {
                "item": "create_new_age:magnetite_block"
            }
        ],
        "priority": 0,
        "stress": 256,
        "ticks": 20000,
        "vein_id": "createoreexcavation:ore_vein_type/magnetite"
    })

    // Tin drilling
    event.custom({
        "type": "createoreexcavation:drilling",
        "drill": {
            "tag": "createoreexcavation:drills"
        },
        "output": [
            {
                "item": "thermal:raw_tin"
            }
        ],
        "priority": 0,
        "stress": 256,
        "ticks": 600,
        "vein_id": "createoreexcavation:ore_vein_type/tin"
    })

    // Netherite rebalance
    event.remove({ id: 'createoreexcavation:drilling/netherite' })
    event.custom({
        "type": "createoreexcavation:drilling",
        "drill": {
            "item": "createoreexcavation:netherite_drill"
        },
        "fluid": {
            "amount": 1000,
            "fluid": "minecraft:lava",
            "nbt": {}
        },
        "output": [
            {
                "chance": 1.2,
                "item": "minecraft:magma_block"
            },
            {
                "chance": 0.05,
                "item": "minecraft:ancient_debris"
            },
            {
                "chance": 0.6,
                "item": "minecraft:gold_nugget"
            },
            {
                "chance": 0.8,
                "item": "minecraft:netherrack"
            }
        ],
        "priority": 0,
        "stress": 2048,
        "ticks": 4000,
        "vein_id": "createoreexcavation:ore_vein_type/netherite"
    })
})
