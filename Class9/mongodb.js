const {MongoClient} = require('mongodb')


const url = "mongodb+srv://user1:pass1@cluster0.jssdp.mongodb.net/geeksterDB?retryWrites=true&w=majority"
global.mongoClient = new MongoClient(url)

async function mongoConnect() {
    try {
        await mongoClient.connect();
    
    } catch(e) {
        console.error(e)
    } finally {
        // mongoClient.close()
    }
}
mongoConnect()