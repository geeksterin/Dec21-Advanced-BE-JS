global.express = require('express')
global.joi = require('joi')

var app = express()
var product = require('./routers/product')
var product_schema = require('./models/product')

require('./db')

app.use(express.json())
app.get('/', (request, response) => {
    response.send("Hey There!")
})
$port = process.env.port
$host = process.env.host


app.use('/products', product)

app.listen(3001, () => {
    // console.log(process.env)
    console.log("Listening to http://127.0.0.1:3001")
})

// connection.end()