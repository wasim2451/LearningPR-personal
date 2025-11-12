const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send(`<h1>Hello World From Wasim Tech Park</h1>
        <p>This is me trying to create a PR on Company repo !</p>
        `);
});
app.get('/wasim',(req,res)=>{
    res.send("Sritama is Beautiful | Wasim is too !");
})
app.listen(3000,(message)=>{
    console.log("Listenting on 3000");
});