const express = require('express') ;
 const app = express() ;
 const path = require('path') 
 
 app.use(express.json()) ;
 app.use(express.urlencoded({extended : true})) ;
 //above 2 line are basically parser as we use form basically above 2 lines
app.use(express.static(path.join(__dirname,'public'))) ;
//__dirname,'public' as that path will directly goes as in the express.static m wo sb chla gya app.use m
//basically har request k lie u search in the directory for static files in public folder 
 app.set('view engine','ejs') ; //is se render kr skte h
 app.get("/",function(req,res){
    res.render("index.ejs")  ;
 })
 //as basically hmne render kiya hamara page wo index page basically view folder m hi dhundha jayga
 app.get("/profile",function(req,res){
   res.send("chal rhi profile") ;
 })
 app.get("/profile/:username",function(req,res){
    res.send(`Hi,welcome to my website ${req.params.username}`)  ;
   //req.params matlab asa kuch bhi jiske aage colon hai as what we change after colon that we have to write after req.params.chacha if we write in url as /profile/:chacha
 
 });
 app.get("/profile/:username/:age",function(req,res){
   res.send(`Hi welcome to my website ${req.params.username} and ur age is ${req.params.age} `)
 })
 app.listen(3000,function(){
    console.log("it is running");
 })