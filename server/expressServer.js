const express = require('express')

const app=express()

const port=3000


app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})


app.listen(port,()=>{
    console.log("server is running");
    
})