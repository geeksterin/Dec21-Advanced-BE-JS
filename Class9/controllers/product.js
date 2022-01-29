var connectToProductDB = require('./../services/product')
function getAllProducts(req, res) {
    connectToProductDB.getAllProductsFromDB().then(([data, fields]) => {
        console.log(data)
        res.status(200).send(data)
        return
    }).catch((err)=>{
        console.log(err)
    })
}

function createProduct(req, res) {
    console.log(req.body)
    connectToProductDB.addProductToDB(req.body).then(([data, fields]) => {
        console.log("data"+JSON.stringify((data)))
        if(data.affectedRows == 1) {
            console.log(res)
            // res.send({"message": "Product successfully created"})
        } else{
            console.log("er")
            res.status(422).send({"message": "Unable to create product"})
        }
    })
    // .catch((err)=>{
    //     console.log("err")
    //     res.status(404).send({"error":err})
    // })
}
module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct
}