let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/coke')

app.use(cors())
app.use(bodyParser.json())

let coke = require('./routes/coke_routes')(app)
let server = app.listen(3001, () => console.log('Listening on port 3001'))