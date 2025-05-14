const express = require('express');
const app = express();
const main = require("./db");
const User = require("./users");
const port = 5600;

app.use(express.json());

app.post("/register",async(req,res)=>{
    try{
        await User.create(req.body);
        res.send("User Registered Successfull!!!");
    }catch(error){
        res.send("Error : "+error);
    }
})

// getting all user data
app.get("/info",async (req,res)=>{
    
    try{
         
        const result = await User.find(); 
        res.send(result);

    }catch(error){
        res.send("Error : "+error);
    }
})

// find any perticular User 
app.get("/user/:id",async (req,res)=>{
    try{
         
       const Result = await User.findById(req.params.id); 
       res.send(Result);

    }catch(error){
        res.send("Error : "+error);
    }
})

//Delete any Perticular User 
app.delete("/user/:id",async (req,res)=>{

    try{

       await User.findByIdAndDelete(req.params.id);
       res.send("Deleted Successfull!!! ");

    }catch(error){
        res.send("Error : "+error);
    }
})

//update details 
app.patch("/user",async(req,res)=>{
    try{

        const {id, ...update} = req.body;
        await User.findByIdAndUpdate(id,update);
        res.send("Update Successfull")

    }catch(error){
        res.send("Error : "+error);
    }
})

main()
.then(async ()=>{
    console.log("Database Successfully Connected to Server");
    app.listen(port,()=>{
        console.log(`Server Running at ${port} Port`);
    })
})
.catch((err) => {
        console.error("Database Connection Failed:", err);
});