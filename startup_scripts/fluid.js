StartupEvents.registry('fluid', event => {
    event.create('malhonium')
        .thickTexture(0x1A0A1A)
        .bucketColor(0x1A0A1A)
        .displayName('Malhonium')

    event.create('hot-thermo-fluid')
        .thickTexture(0xFF5733 )
        .bucketColor(0xFF5733)
        .displayName('Hot Thermo Fluid')

    event.create('cold-thermo-fluid')
        .thickTexture(0x341539 )
        .bucketColor(0x341539)
        .displayName('Cold Thermo Fluid')

    event.create('sulfur_dioxide')
        .thinTexture(0xAAAAAA)
        .displayName('Sulfur Dioxide')

    event.create('sulfur_trioxide')
        .thinTexture(0xCCCCCC)
        .displayName('Sulfur Trioxide')

    event.create('sulfuric_acid')
        .thinTexture(0xbbc35d)
        .bucketColor(0xbbc35d)
        .displayName('Sulfuric Acid')

    event.create('malhonium_solvent')
        .thinTexture(0x6a5a40 )
        .bucketColor(0x6a5a40 )
        .displayName('Malhonium Solvent')

    event.create('thermogenic_jahaium_slurry')
        .thickTexture(0xFF0000)
        .bucketColor(0xFF0000)
        .displayName('Thermogenic Jahaium Slurry')

    event.create('jahaium_slurry')
        .thickTexture(0x4f6b6b)
        .bucketColor(0x4f6b6b)
        .displayName('Jahaium Slurry')

    // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
    event.create('cooled_jahaium')
        .thinTexture(0x00FFFF)
        .bucketColor(0x00FFFF)
        .displayName('Cooled Jahaium')

    // Fluid with custom textures
    /*event.create('strawberry_cream')
        .displayName('Strawberry Cream')
        .stillTexture('kubejs:block/strawberry_still')
        .flowingTexture('kubejs:block/strawberry_flow')
        .bucketColor(0xFF33FF)*/
})
