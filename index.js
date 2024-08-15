/*
const fs = require('fs');
//require fs means aapne fs module o bhar nikala h node s aur usko use kr liya

fs.writeFile("hey.txt","hey hello kaise ho",function(err){
    if(err)
     console.log(err) ;
    else
    console.log("done");
})
fs.appendFile("hey.txt"," acha ho",function(err){
    if(err)
     console.log(err) ;
    else
    console.log("done");
})
fs.rename("hey.txt","hello.txt",function(err){
    if(err)
     console.log(err) ;
    else
    console.log("done");
})
    
fs.copyFile("hello.txt","./copsy/copy.txt",function(err){
    if(err)
     console.log(err.message) ;
    else
    console.log("done");
})
    
fs.unlink("hello.txt",function(err){
  if(err) console.error(err) ;
  else console.log("removed") ;  
})
fs.unlink("./copy/copy.txt",function(err){
    if(err) console.error(err) ;
    else console.log("removed") ;  
  })
    
fs.rmdir("./copy",{recursive: true},function(err){
    if(err) console.error(err) ;
    else console.log("removed");
})
    
   const http = require('http') ;

   const server = http.createServer(function(req,res){
    res.end("hello world") ;
   })
   server.listen(3000) ;
   
  console.log("hello wordl");
  */
  const express = require('express')
  //as jo bhi cheeze is 'express' m wo sb nikl k express const m aa chuki h 
  const app =   express() ;
  //as basically jo bhi data express js ka h wo sb y app kr skta h 
  //routes create krna 
  //requestHandler ek middleware hota hai 
  /* //basically understand of middleware
 app.use(function(req,res,next){
    console.log('middleware chala');
    next() ;
 });
 app.use(function(req,res,next){
    console.log("ek aur middleware chala") ;
    next() ;
 })*/
 //form handling session and cookie 
  
 app.use(express.json()) ;
 app.use(express.urlencoded({extended : true})) ;

  app.get("/",function(req,res){
    res.send("champion meeeera anuuuj") ;
  })
  app.get("/about",function(req,res){
    res.send("about page hai y ") ;
  })
  
  app.get("/profile",function(req,res,next){
 res.send("done") //y jayga console p 
  })
  /*
  app.use((err,req,res,next) => {
    console.log(err.stack);
   res.status(500).send('Something went wrong,we dont have any idea') ; //y jayga frontend p 
  })*/

  app.listen(3000) ;
