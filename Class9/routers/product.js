var product = express.Router()
var productMiddleware = require('./../middlewares/product')
var productController = require('./../controllers/product')
// product.use('/', (req,res, next) => {
//     next()
// })
product.get('/', productController.getAllProducts)
product.post('/', productMiddleware, productController.createProduct)

module.exports = product
//router -> (middleware) -> controller -> (services) -> db