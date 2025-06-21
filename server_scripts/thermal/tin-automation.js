ServerEvents.recipes(event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'create:scoria' }
        ],
        results: [
            'minecraft:sand',
            { item: 'thermal:tin_nugget', chance: 0.1 }
        ]
    })
})
