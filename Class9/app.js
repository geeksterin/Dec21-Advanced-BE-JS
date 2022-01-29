global.express = require('express')
global.joi = require('joi')

var app = express()
var product = require('./routers/product')
var userRoutes = require('./routers/user')
var product_schema = require('./models/product')
var sessions = require('express-session')
var cookieParser = require('cookie-parser')
global.config = require('config')
global.jwt = require('jsonwebtoken')
require('./db')

app.use(express.json())

$port = process.env.port
$host = process.env.host
// secret
// ->login ->
// /req-> session
// app.use(cookieParser()) //key valuye

// app.use(sessions({
//     secret: "08f8e01459aada3ecee777879098e41ea8f5f09d2bfc614d18e3e7eac7aef67c65f1d514933d8192d7769067e2ffa46a",
//     saveUninitialized: true,
//     cookie: {maxAge: 24 * 60 * 60 * 60},  //milliseconds
//     resave: false
// }))

app.use('/user',userRoutes)
app.use('/products', product)

// app.get('/',(req,res)=> {
//     // var cookies = req.cookies;
//     // var cookies = req.signedCookies;
//     console.log(req.cookies)
//     var session = req.session;
//     // if (user_id == 12)
//     res.status(200).send({"session": session, cookies: req.cookies})
//     // else
//     // res.status(404).send({"session":"Invalid session"})
// })
// c1-> (2 tabs)
// c2->  

{/* <create random string in node console> */}
// require('crypto').randomBytes(48, function(err, buffer) {
//          token = buffer.toString('hex');
//       });

  

// app.use((req,res,next)=>{
//     connection.end()

// })
app.listen(3001, () => {
    // console.log(process.env)
    // console.log(process.env)
    console.log(config.get('host'))
    console.log("Listening to http://127.0.0.1:3001")
})

// connection.end()