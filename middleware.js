import express from 'express';
const app = express();
const port=1000;

app.use("/user",(req,res,next)=>{
    // logs the details here 
    console.log("Time : "+ new Date().toLocaleTimeString()+" URL : "+req.url);

    //check authorization and authentication 

    console.log("Hello I am Middleware");
    next();
});

app.get("/user",(req,res)=>{
    res.send("Data Fetched Successfull!!!");
});

app.post("/user",(req,res)=>{
    res.send("Data Saved Successfull!!!");
});

app.delete("/user",(req,res)=>{
    res.send("Data Delete Successfull!!!");
});

app.listen(port,()=>{
   console.log(`Server is Runing at localhost:${port}`);
});