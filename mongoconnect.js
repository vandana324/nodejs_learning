const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const database = 'e-comm';

async function dbconnect(){
    let result = await client.connect();
    let db = result.db(database);
    return  db.collection('products')
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

module.exports = dbconnect;