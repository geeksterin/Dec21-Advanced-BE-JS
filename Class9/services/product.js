async function getAllProductsFromDB() {
    console.log("co")
    return await connection.query('select * from product;')
}

async function addProductToDB(product) {
    // `insert into product (id, name, info, reviews) values `
    var sql = `insert into product (name, info, reviews) values ( '${product.name}', '${product.info}', '${JSON.stringify(product.reviews)}');`
    console.log(sql)
    return await connection.query(sql)
}

async function productUpdate(product_id, product_details) {
    console.log(product_id)
    console.log(product_details)
    const result =  await mongoClient.db('geeksterDB').collection('product').updateOne({"_id": product_id}, {$set: {"name":"Pepsi"}})
    console.log(result.modifiedCount)
}

module.exports = {
    getAllProductsFromDB: getAllProductsFromDB,
    addProductToDB: addProductToDB,
    productUpdate: productUpdate
}