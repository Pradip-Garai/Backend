const express = require('express');
const app=express();



app.get("/user",(req,res)=>{
    res.send({"name":"Pradip","Age":19,"City":"Kolkata","course":"BCA"});
})

app.get("/",(req,res)=>{
    res.send("Hello Coder Army");
})

// parsing the data 
app.use(express.json());  // use to convert json to javascript object

//Receive Data
app.post("/user",(req,res)=>{

    console.log(req.body);
    res.send("Data Save Successfully!!!")
})



app.listen(4000,()=>{
    console.log("Running at 4000 port");
})