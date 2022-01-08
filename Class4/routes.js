
var cities = require('./controllers/cities')
var movies = require('./controllers/movies')
var bookings = require('./controllers/booking')


function routes(req, res) {
    if (req.url == "/cities") {
        res.writeHead(200, "Application-Type:Text/HTML")
        res.write(JSON.stringify(cities.getAllCities()))
        res.end()
    } else if (req.url == "/movies" && req.method == "GET") {
        res.writeHead(200, "Application-Type:Text/HTML")
        res.write(JSON.stringify(movies.getAllMovies()))
        res.end()
    }  else if (req.url == "/movies" && req.method == "POST") {
        req_body = ""
        req.on('data', (chunks) =>{
            req_body += chunks
        })
        response = {}
        req.on('end', ()=>{
            new_movie = JSON.parse(req_body)
            new_movie.id = Object.keys(movies).length + 1
            movies.push(new_movie)
            res.statusCode = 201
            res.setHeader("Content-Type:Text/HTML")
            res.end(JSON.stringify(movies))
        })
    } else if (req.url == '/bookings' && req.method == 'POST') {
        req_body = ""
        req.on('data', (chunks) =>{
            req_body += chunks
        })
        response = {}
        req.on('end', ()=>{
            body_params = JSON.parse(req_body)
            console.log(body_params)
            show_id = body_params['show_id']
            seat_id = body_params['seat_id']
            user_id = body_params['user_id']
            var response = bookings.createBooking(show_id, seat_id, user_id)
            if ("error" in response) {
                res.writeHead(404, {"Content-Type":"Text/HTML"})
                res.end(JSON.stringify(response))
            } else {
                res.writeHead(201, {"Content-Type":"Text/HTML"})
                res.end(JSON.stringify(response))
            }
        })
    } else if (req.url.split('/')[1] == 'bookings' && req.method == 'PUT') {
        req_body = ""
        booking_id = req.url.split('/')[2] //['','booking',''] // /bookings/1
        req.on('data', (chunks) =>{
            req_body += chunks
        })
        response = {}
        req.on('end', ()=>{
            body_params = JSON.parse(req_body)
            console.log(body_params)
            seat_id = body_params['seat_id']
            var response = bookings.updateBooking(booking_id, seat_id)
            if ("error" in response) {
                res.writeHead(404, {"Content-Type":"Text/HTML"})
                res.end(JSON.stringify(response))
            } else {
                res.writeHead(200, {"Content-Type":"Text/HTML"})
                res.end(JSON.stringify(response))
            }
        })
    } else if (req.url.split('/')[1] == 'bookings' && req.method == 'DELETE') {
        var response = bookings.deleteBooking(booking_id)
    }else {
        res.writeHead(404,"Application-Type:Application/JSON")
        res.end()
    }
}

module.exports = routes