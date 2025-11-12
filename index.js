const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send(`<h1>Hello World From Wasim Tech Park</h1>`);
});
app.listen(3000,(message)=>{
    console.log("Listenting on 3000");
});