ServerEvents.recipes(event => {
    event.remove({ output: 'projectred_core:plate' })
    event.recipes.createPressing('projectred_core:plate', 'minecraft:stone')
})
