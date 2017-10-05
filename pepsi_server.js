let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pepsi')

app.use(bodyParser.json())

let pepsi = require('./routes/pepsi_routes')(app)
let server = app.listen(4001, () => console.log('Listening on port 4001'))