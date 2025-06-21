WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            'minecraft:coal_ore',
            'minecraft:iron_ore',
            'minecraft:diamond_ore',
            'minecraft:gold_ore',
        ];
    })
})
