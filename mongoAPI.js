const express = require('express');
const dbconnect = require('./mongoconnect');
const app = express();

// app.get('/',async (req,res)=>{
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.log(data);
//     res.send(data)
// })

// app.listen(5000)

app.use(express.json())
app.get("/search/:key",async (req,res) =>{
    console.log(req.params.key)
    let data = await Product.find
})