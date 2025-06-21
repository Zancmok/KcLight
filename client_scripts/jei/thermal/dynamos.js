JEIEvents.removeCategories(event => {
    console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt

    // Hide Dynamos
    event.remove('thermal:compression_fuel')
    event.remove('thermal:disenchantment_fuel')
    event.remove('thermal:gourmand_fuel')
    event.remove('thermal:lapidary_fuel')
    event.remove('thermal:magmatic_fuel')
    event.remove('thermal:numismatic_fuel')
    event.remove('thermal:stirling_fuel')
})
