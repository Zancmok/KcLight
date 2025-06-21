ServerEvents.recipes(event => {
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { fluid: 'minecraft:water', amount: 1000 },
            'minecraft:raw_iron',
            'minecraft:stone',
            'minecraft:clay'
        ],
        results: [
            { item: 'create_new_age:thorium', chance: 0.5 },
        ]
    })
})
