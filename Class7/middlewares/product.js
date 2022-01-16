var product_schema = require('./../models/product')

module.exports = (req, res, next) => {
    console.log("Inside middleware")
    var if_validate = product_schema.validate(req.body)
    // console.log(if_validate)
    if (if_validate.error) {
        console.log(if_validate.error.message)
        res.status(400).send({"error":if_validate.error.message})
    } else {
        console.log(if_validate.value)
        next()
    }
}