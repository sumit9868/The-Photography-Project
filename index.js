const express=require('express');
const app=express();
app.get('/',(req,res)=>{
res.send('link established succesfully');
})
app.get('/home',(req,res)=>{
    res.send('you are at your home');
})
app.listen(3000,()=>{
    console.log('listening to port 3000');
})