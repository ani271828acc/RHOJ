const express=require('express')
const fs=require('fs');
const { default: mongoose } = require('mongoose');
const port=8080;


const app=express();
app.set('view engine', 'ejs');
const dbURI = 'mongodb+srv://dugdeep-mc:powdermilgayi@cluster0.tixsypf.mongodb.net/?retryWrites=true&w=majority'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => {
            console.log("connected");
            app.listen(port);
        })
        .catch(err=>{
            throw err;
        });

app.get('/', (req, res)=>{
    res.render('list');
});

app.get('/create', (req, res)=>{
    res.render('create', {title:"create"});
});

app.post('/create',(req, res)=>{
    // req.
});