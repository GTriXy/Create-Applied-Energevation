  ServerEvents.recipes(event => {
    //焦煤
    event.remove({ output: 'tfmg:coal_coke' })
    event.custom({
        "type": "tfmg:coking",
        "ingredients": [
          {
            "count": 1,
            "item": "minecraft:coal"
          }
        ],
        "processingTime": 900,
        "results": [
          {
            "count": 1,
            "item": "tfmg:coal_coke"
          }
        ,
          {
            "fluid": "tfmg:creosote",
            "amount": 2
          }
      
        ]
      })
})