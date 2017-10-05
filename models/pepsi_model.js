let mongoose = require('mongoose')

let pepsiSchema = mongoose.Schema({
  name: String,
  calories: Number,
  sugar: Number
})

module.exports = mongoose.model('pepsi', pepsiSchema)