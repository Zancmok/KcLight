WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            'create_new_age:thorium_ore',
            'create_new_age:magnetite_block'
        ];
    })
})
