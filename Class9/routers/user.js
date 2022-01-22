var user = express.Router()
var userController = require('./../controllers/user')

function userM(req,res,next){
    // if (req.url == "/") {
    //     res.status(20
    // }
    next()
}

user.get('/', userM, userController.helloUser)
user.post('/register', userM, userController.registerUser)
user.post('/login',userM,userController.loginUser)
user.post('/logout', userM,userController.logoutUser)
module.exports = user