ServerEvents.recipes(event => {
        //厨锅
        event.remove({ output: 'farmersdelight:cooking_pot' })
        event.recipes.create.mixing(['farmersdelight:cooking_pot'], ['create:basin', 'create:mechanical_mixer'])
        //四叶草
        event.remove({ output: 'botania:cosmetic_four_leaf_clover' })
        event.recipes.create.mixing(['botania:cosmetic_four_leaf_clover'], ['fruitsdelight:hawberry_stick', 'farmersdelight:chocolate_pie', 'farmersdelight:glow_berry_custard', 'farmersdelight:beef_stew','minecraft:pitcher_plant'])
        //festival chicken
        event.remove({ output: 'festive_delight:festive_chicken_block' })
        event.recipes.create.mixing(['festive_delight:festive_chicken_block'], ['farmersdelight:cabbage_leaf', 'farmersdelight:roast_chicken_block', 'fruitsdelight:pineapple_fried_rice'])
        //素食者的认可（炒时蔬）
        event.remove({ output: 'cuisinedelight:vegetable_platter' })
        event.recipes.create.mixing(['cuisinedelight:vegetable_platter'], ['farmersdelight:ratatouille', 'farmersdelight:mixed_salad',  'farmersdelight:cabbage_rolls'])
        //海鲜爱好者的认可（炒海鲜）
        event.remove({ output: 'cuisinedelight:seafood_platter' })
        event.recipes.create.mixing(['cuisinedelight:seafood_platter'], ['farmersdelight:grilled_salmon', 'farmersdelight:fish_stew', 'farmersdelight:baked_cod_stew', 'farmersdelight:cod_roll'])
        //杂炒意面
        event.remove({ output: 'cuisinedelight:mixed_pasta' })
        event.recipes.create.mixing(['cuisinedelight:mixed_pasta'], ['farmersdelight:pasta_with_meatballs', 'farmersdelight:pasta_with_mutton_chop'])
        //剑饼干
        event.remove({ output: 'festive_delight:gingerbread_cookie_sword' })
        event.recipes.create.mixing(['festive_delight:gingerbread_cookie_sword'], ['festive_delight:gingerbread_cookie_base_sword', '2x farmersdelight:stuffed_potato', '4x fruitsdelight:blueberry_jelly', 'farmersdelight:kelp_roll_slice'])
        //苦力怕饼干
        event.remove({ output: 'festive_delight:gingerbread_man_creeper' })
        event.recipes.create.mixing(['festive_delight:gingerbread_man_creeper'], ['festive_delight:gingerbread_cookie_creeper', 'farmersdelight:mutton_wrap', 'farmersdelight:hamburger', 'create:honeyed_apple'])
        //man饼干 牢大饼干
        event.remove({ output: 'festive_delight:gingerbread_man' })
        event.recipes.create.mixing(['festive_delight:gingerbread_man'], ['festive_delight:gingerbread_man_base', 'farmersdelight:honey_glazed_ham_block','farmersdelight:shepherds_pie_block','fruitsdelight:pineapple_marinated_pork'])
        //拐杖糖
        event.remove({ output: 'festive_delight:sugar_cane' })
        event.recipes.create.mixing(['festive_delight:sugar_cane'], ['3x create:bar_of_chocolate', 'create:chocolate_glazed_berries','3x fruitsdelight:lychee_jelly',Fluid.of('thermal:syrup',500)])
        //建造工茶饮
        event.remove({ output: 'create:builders_tea' })
        event.recipes.create.mixing(['create:builders_tea'], ['fruitsdelight:peach_tea', 'fruitsdelight:hawberry_tea','fruitsdelight:mango_tea','fruitsdelight:mangosteen_tea',Fluid.of('create:tea',500)])
        //可疑的大杂烩
        event.remove({ output: 'cuisinedelight:suspicious_mix' })
        event.recipes.create.mixing(['cuisinedelight:suspicious_mix'], ['cuisinedelight:mixed_pasta', 'cuisinedelight:seafood_platter','cuisinedelight:vegetable_platter','festive_delight:festive_chicken_block'])
        //星星糖 
        event.remove({ output: 'festive_delight:gingerbread_cookie_flake' })
        event.recipes.create.mixing(['festive_delight:gingerbread_cookie_flake'], ['festive_delight:gingerbread_man', 'festive_delight:gingerbread_man_creeper','festive_delight:gingerbread_cookie_sword','festive_delight:sugar_cane'])
        //gin block
        event.remove({ output: 'festive_delight:gingerbread_pillar' })
        event.recipes.create.mixing(['festive_delight:gingerbread_pillar'], ['cuisinedelight:suspicious_mix', 'festive_delight:gingerbread_cookie_flake','create:builders_tea','botania:cosmetic_four_leaf_clover'])
})