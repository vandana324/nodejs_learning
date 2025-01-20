const mongoose = require('mangoose');

const main =async()=>{
    await mangoose.connect("mongodb://localhost:27017/e-comm")
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number
    })

    const productsModel = mangoose.model('products',productSchema);
    let data = new productsModel({name:"m8"});
    let result = await data.save();
    console.log(result)

}

//same for update ,delete ,inset