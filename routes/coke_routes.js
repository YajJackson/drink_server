let Coke = require('../models/coke_model')

module.exports = function(app) {

  // Create
  app.post('/coke', (req, res) => {
    newDrink = new Coke(req.body)
    newDrink.save(err => err ? res.json({info: 'error during create'}) : res.send({info: 'create successful', data: newDrink}))
  })

  // Read all
  app.get('/coke', (req, res) => {
    Coke.find((err, drinks) => err ? res.json({info: 'error during find', err}) : res.json({data: drinks}))
  })
}