var express = require('express')
var app = express()

var path = require('path')
var port = 5050

var movies = require('./controllers/movies')

app.get('/movies', (req, res)=>{
    res.send(movies.getAllMovies())
})

app.listen(port, (err) => {
    if (err) {
        console.log("Server Busy")
    } else {
        console.log("Server running at http://127.0.0.1:"+port)
    }
})