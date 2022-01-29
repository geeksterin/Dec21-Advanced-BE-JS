var product_schema = require('./../models/product')
var userService = require('./../services/user')
function validateUser(req, res, next) {
    console.log("validating")
    var token = req.headers['authorization'].split('Bearer ')[1]

    try {
        var res = jwt.verify(token, config.get('token_secret'))
        console.log(res)
        next()
    } catch(e) {
        console.log("??"+e)
        return {"error":e}
    }
}

module.exports = async (req, res, next) => {
    console.log("Inside middleware")
    var res = validateUser(req, res, next)
    if (res && res.hasOwnProperty('error')) {
        res.status(400).send({"error":res.error})
    }
    var if_validate = product_schema.validate(req.body)
    console.log("ifv"+if_validate)
    if (if_validate.error) {
        console.log("err msg"+if_validate.error.message)
        res.status(400).send({"error":if_validate.error.message})
    } else {
        console.log("validated using joi" + if_validate.value)
        next()
    }
}