// list all cities, list city with a city id
const cities = require('./../models/cities')

module.exports = {
    getAllCities : function getAllCities() {
        console.log(cities)
        return cities
    },
    getCityByCityId: function getCityByCityId(city_id) {
        return cities.filter((city) => city.id == city_id)
    }
}