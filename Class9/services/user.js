var bcrypt = require('bcrypt')

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

module.exports = {
    createUser: createUser,
    getUser: getUser
}

// (str) ->(str)->(str)
// 10 ->