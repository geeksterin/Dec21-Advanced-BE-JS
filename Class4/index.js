const http = require('http')
$port = 5050
$host = "127.0.0.1"
const routes = require('./routes')
// O(1)
// movies =
// {
//     1: [{
//         "id": 1, 
//         "cityId": 1,
//         "name": "ABC",
//         "duration": 120
//     },
//     {
//         "id": 2, 
//         "cityId": 1,
//         "name": "ABC",
//         "duration": 120,
//     }],
// }
// O(N)//O(1)

http.createServer((req, res) => {
    console.log(req.url)
    routes(req, res)
}).listen($port, () => {
    console.log(`Server listening to http://${$host}:${$port}`)
})


// index/app -> server
// endpoints -> routes