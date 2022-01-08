// list all movies, list movies with a city id
const movies = require('./../models/movies')
const users = require('./../models/users')

// {
//     "id": 1, 
//     "showId": 1,
//     "seatId": 1,
//     "userId": 1,
//     "status": "Created",
//     "created_at": "1.1.2020 12:30"
// },

module.exports = {
    getAllMovies: function getAllMovies() {
        return movies
    }
}