ServerEvents.recipes(event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'create:limestone' }
        ],
        results: [
            'minecraft:sand',
            { item: 'pneumaticcraft:copper_nugget', chance: 0.1 }
        ]
    })
})
