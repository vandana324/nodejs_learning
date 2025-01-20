// const {mongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';

// const database = 'e-comm'
// const client = new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db('database');
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();


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

//read data ...........promise................
// dbconnect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.warn(data)
//     })
// })


// read data.................await............
// console.warn(dbconnect())

// const main = async () =>{
//     let data = await dbconnect();
//     data = await data.find({name:'samsung'}).toArray();
//     console.warn(data); 
// }

// main();

// insert................................................

async function insertData() {
    const collection = await dbconnect();
    const result = await collection.insertOne({
        name: 'note 12',
        brand: 'mi',
        price: 300,
        category: 'mobile'
    });
    console.log(result, 'documents inserted.');
}

insertData()
    .catch(err => console.error('Error inserting document:', err))
    .finally(() => client.close());


const updatedata= async() =>{
     let data = await dbconnect();
     let result = data.updatedOne({
        name:'note 12'},{
            $set:{
                name:'note pro max'
            }
        }
     )
     console.warn(result)
     }


const deletedata= async() =>{
    let data = await dbconnect();
    let result = data.deleteOne({
        name:'note pro max'
    })
    console.warn(result);
}
deleteOne();
