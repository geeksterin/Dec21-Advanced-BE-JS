const { MongoClient } = require('mongodb')
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
    console.log("here")
    console.log(req.body)
    connectToProductDB.addProductToDB(req.body).then(([data, fields]) => {
        console.log("data"+JSON.stringify((data)))
        if(data.affectedRows == 1) {
            // console.log(res)
            res.status(201).send({"message": "Product successfully created"})
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

async function updateProduct(req,res) {
    console.log("inside update")
    let product_id = `ObjectId(${req.body.id})`
    console.log(product_id)

    const result = await mongoClient.db('geeksterDB').collection('product').updateOne({"name": "sprite"}, {$set: {"name":"Pepsi", "info":"bad for health"}})
    console.log(result)
        res.status(200).send({"message":"Product updated succesfully"})
}

module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct,
    updateProduct: updateProduct
}