ServerEvents.recipes(event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:blackstone' }
        ],
        results: [
            'minecraft:sand',
            { item: 'create:zinc_nugget', chance: 0.1 }
        ]
    })
})
