ServerEvents.recipes(event => {
    event.remove({ output: 'pneumaticcraft:printed_circuit_board' })
    event.recipes.createMechanicalCrafting('pneumaticcraft:printed_circuit_board',
        [
            '  C  ',
            ' DBD ',
            'CBABC',
            ' DBD ',
            '  C  '
        ],
        {
            A: 'pneumaticcraft:unassembled_pcb',
            B: 'create_new_age:copper_circuit',
            C: 'pneumaticcraft:transistor',
            D: 'pneumaticcraft:capacitor',
        })
})
