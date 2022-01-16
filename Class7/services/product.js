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

module.exports = {
    getAllProductsFromDB: getAllProductsFromDB,
    addProductToDB: addProductToDB
}