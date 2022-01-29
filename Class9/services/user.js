var bcrypt = require('bcrypt')
const { response } = require('express')

async function createUser(user) {
    var password = user.password
    console.log(password)
    var salt = await bcrypt.genSalt(10)
    var hashedPassword = await bcrypt.hash(password, salt)
    sql = `INSERT INTO user (username, password) VALUES ("${user.username}", "${hashedPassword}")`
    return await connection.query(sql)
}

async function getUser(username) {
    return await connection.query(`select * from user where username="${username}"`)
}

async function authoriseRequest(token) {
    console.log("token check + "+token+" +++ "+config.get('token_secret'))
    await jwt.verify(token, config.get('token_secret').toString()).then((if_verfied)=> {
        return if_verfied
    }).catch((e)=> {
        console.log(e)
        return null
    })
}

module.exports = {
    createUser: createUser,
    getUser: getUser,
    authoriseRequest: authoriseRequest
}

// (str) ->(str)->(str)
// 10 ->