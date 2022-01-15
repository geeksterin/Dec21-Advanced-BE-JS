var router = express.Router()
var productMiddleware = require('./../middlewares/product')

router.get('/products', productMiddleware, productController.getAllProducts)
