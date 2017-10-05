let mongoose = require('mongoose')

let cokeSchema = mongoose.Schema({
  name: String,
  calories: Number,
  sugar: Number
})

module.exports = mongoose.model('coke', cokeSchema)