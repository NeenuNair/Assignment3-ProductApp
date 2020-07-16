const express = require('express');
const ProductData = require('./src/model/Productdata');
const Userdata = require('./src/model/users');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())

app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    ProductData.find()
               .then(function(products){
                    res.send(products);          
               });
});

app.post('/edit',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    const id = req.body.id;
    console.log(id);
    ProductData.find()
    .then(function(products){
         res.send(products);        
    });
});

app.post('/oneProduct',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    const id = req.body.id;
    ProductData.findOne({_id:id})
               .then(function(product){
                    res.send(product);          
               });
});

app.post('/update',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    ProductData.updateOne({_id:req.body.product._id},{$set:{ 
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl:req.body.product.imageUrl
    }})
        .then(function(products){
            res.send(products);
        });
});
    
app.post('/deleteProduct',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    const id = req.body.id;
    console.log(id);
    ProductData.deleteOne({_id:id})
               .then((data)=>{
                    res.send('Deleted a Product!!');          
               });
});

app.post('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    let Uname=req.body.credential.email;
    let password=req.body.credential.password;
    Userdata.findOne({email:Uname,password:password})
    .then(function(credential){
        console.log(credential);
        res.send(credential);
    });
});

app.post('/signup',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    var credential = {
        email : req.body.user.email,
        password : req.body.user.password,
        // type : req.body.user.type,
    }
    
    var userCredential = new Userdata(credential);
    console.log(userCredential);
    userCredential.save();
});

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
    }
    var product = new ProductData(product);
    product.save();
});

app.listen(3000, function(){
    console.log('listening to port 3000')
});