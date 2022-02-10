var product = express.Router()
var productMiddleware = require('./../middlewares/product')
var productController = require('./../controllers/product')

product.get('/', productController.getAllProducts)
// product.post('/', productMiddleware.authorizeJWT, productMiddleware.validateSchema, productController.createProduct)
product.post('/', productController.createProduct)
product.put('/', productController.updateProduct)

module.exports = product
