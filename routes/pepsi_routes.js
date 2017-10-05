let Pepsi = require('../models/pepsi_model')

module.exports = function(app) {

  // Create
  app.post('/pepsi', (req, res) => {
    newDrink = new Pepsi(req.body)
    newDrink.save(err => err ? res.json({info: 'error during create'}) : res.json({info: 'create succesful'}))
  })

  // Read all
  app.get('/pepsi', (req, res) => {
    Pepsi.find((err, drinks) => err ? res.json({info: 'error during find'}) : res.json({data: drinks}))
  })
}