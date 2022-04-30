const express = require('express');
const products =require('./data/products');
const app =express();

const port =process.env.PORT  || 8080;

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the server</h1>")
});


app.get('/products',(req,res)=>{
    res.json(products);
});


app.get('/products/:id',(req,res)=>{
 const product = products.find((p) => p._id === req.params.id)
 res.json(product);
});


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})