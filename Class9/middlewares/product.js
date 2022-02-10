var product_schema = require('./../models/product')
var userService = require('./../services/user')

function authorizeJWT(req, res, next) {
    console.log("validating")
    var token = req.headers['authorization'].split('Bearer ')[1]
    if (token == null) return res.sendStatus(401)
    console.log("ts"+config.get('token_secret'))

    jwt.verify(token, config.get('token_secret'), (err, payload) => {
        console.log(err)
        if (err) return res.status(403).send({"error":"token is invalid."})
        req.user = payload
        next()
    })
}

function validateSchema(req,res,next) {
    console.log(req)
    // if (res && res.hasOwnProperty('error')) {
    //     res.status(400).send({"error":res.error})
    // }
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


module.exports = {
    authorizeJWT: authorizeJWT,
    validateSchema: validateSchema,
}