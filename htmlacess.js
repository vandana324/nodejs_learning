const express =  require('express');
const path = require('path');

const app = express();
const publicpath = path.join(__dirname,'public')

// app.use(express.static(public));

app.set('view engine','ejs');

app.get('',(req,res)=>{
     res.sendFile(`${publicpath}/index.html`);
})


app.get('/about',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`);
})

app.get('/profile',(req,res)=>{
     const user={
        name:'vandana',
        email:'vanadana@gmail.com',
        cities: 'jaipur'
     }
    res.render('profile');
})



app.get('/help',(req,res)=>{
    res.sendFile(`${publicpath}/help.html`);
})

app.get('*',(req,res) =>{
    res.sendFile(`${publicpath}/nopage.html`)
})

app.listen(5000);