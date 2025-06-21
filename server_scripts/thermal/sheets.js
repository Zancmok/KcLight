ServerEvents.recipes(event => {
    event.recipes.thermal.press('create:copper_sheet', 'minecraft:copper_ingot')
    event.recipes.thermal.press('create:brass_sheet', 'create:brass_ingot')
    event.recipes.thermal.press('create:iron_sheet', 'minecraft:iron_ingot')
    event.recipes.thermal.press('create:golden_sheet', 'minecraft:gold_ingot')
    event.recipes.thermal.press('create_new_age:overcharged_iron_sheet', 'create_new_age:overcharged_iron')
    event.recipes.thermal.press('create_new_age:overcharged_golden_sheet', 'create_new_age:overcharged_gold')
})
