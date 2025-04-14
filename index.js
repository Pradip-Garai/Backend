const express = require('express');
const app=express();


// app.use("/user",(req,res,next)=>{
//     console.log("Hello I am First");
//     res.send("Hi!! i am backend");
//     next();
//     console.log("Sixth");

// },
// (req,res,next)=>{
//     console.log("Hello I am Second");
//     // res.send("Hi!! I am Backend 2 ");  
//     next();
//     console.log("Fifth");
// },
// (req,res)=>{
//     console.log("Hello I am Third");
//     console.log("Fourth");
// }
// )

//********************************************** */

// MW
app.use("/user",(req,res,next)=>{
  console.log("Hello I am First MiddleWare");
  next();
});

// MW
app.use("/user",(req,res,next)=>{
    console.log("Hello I am Second Middleware");
    next();
});

// MW
app.use("/user",(req,res,next)=>{
    console.log("Hello I am Third Middleware");
    next();
});

// RH
app.use("/user",(req,res)=>{
    console.log("Hello I am Response Handelar");
    res.send("Hi!! What's app I am Backend Here");
});

app.listen(2000,()=>{
    console.log("Server Running at 2000");
})