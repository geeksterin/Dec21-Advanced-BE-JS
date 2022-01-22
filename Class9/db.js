var mysql = require('mysql2')

var db_params = {
    user: 'root',
    password: 'password',
    host: 'localhost',
    // port: 3306,
    database: 'geeekster'
}
global.connection =mysql.createPool(db_params).promise()

// global.connection = mysql.createConnection(db_params)
// connection.connect((e) => {
//     if (e) {
//         throw e
//     }
//     console.log("connected to mysql successfully")
// })

// connection.end()
// var data = connection.query('select * from product;')

