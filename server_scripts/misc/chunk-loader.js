ServerEvents.recipes(event => {
    event.remove({ output: 'chunker:chunker' })
    event.recipes.createMechanicalCrafting('chunker:chunker',
        [
            'KOPPPOK',
            'NCLMLCN',
            'NFCHCFN',
            'NEBABEN',
            'IFCBCFI',
            'ICGGGCI',
            'JDDDDDJ'
        ],
        {
            A: 'minecraft:beacon',
            B: 'pneumaticcraft:printed_circuit_board',
            C: 'create_new_age:overcharged_diamond',
            D: 'thermal:netherite_plate',
            E: 'thermal:netherite_gear',
            F: 'create_new_age:overcharged_gold',
            G: 'create:sturdy_sheet',
            H: 'thermal:upgrade_augment_3',
            I: 'thermal:enderium_plate',
            J: 'thermal:signalum_block',
            K: 'thermal:lumium_block',
            L: 'thermal:rf_coil',
            M: 'thermal:redstone_servo',
            N: 'thermal:enderium_glass',
            O: 'thermal:signalum_glass',
            P: 'thermal:lumium_glass',
        })
})
