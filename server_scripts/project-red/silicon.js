ServerEvents.recipes(event => {
    event.remove({ output: 'projectred_core:silicon' })
    event.recipes.createCutting('8x projectred_core:silicon', 'projectred_core:boule')
})
