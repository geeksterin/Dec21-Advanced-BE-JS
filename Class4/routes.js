exports.routes = function routes(req, res) {
    if (req.url == "/cities") {
        res.writeHead(200, "Application-Type:Text/HTML")
        res.write(JSON.stringify(cities.getAllCities()))
        res.end()
    } else if (req.url == "/movies" && req.method == "GET") {
        res.writeHead(200, "Application-Type:Text/HTML")
        res.write(JSON.stringify(movies))
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
    } else {
        res.writeHead(404,"Application-Type:Application/JSON")
        res.end()
    }
}