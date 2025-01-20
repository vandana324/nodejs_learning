const express =  require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("data send by brower",req.query.name)
     res.send(`<h1>hello this is home page</h1><a href="/about">go to about page</a>`);
})


app.get('/about',(req,res)=>{
    res.send(`<input type =" text" placeholder="user name"</input>
        <button value=btn>click me</button>`);
})


app.get('/help',(req,res)=>{
    res.send("this is main page");
})

app.listen(5000);