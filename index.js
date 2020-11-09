const express = require('express')
const bodyParser = require('body-parser')

// initialize our express app
const direction = require('./routes/direction.route') 

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 8080

app.use('/direction', direction)

module.exports = app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port)
});




