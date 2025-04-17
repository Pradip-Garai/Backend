const express = require('express');
const app = express();
const User = require('../model/user');
const main = require('../Database/database');

app.use(express.json());

//get data from Database
app.get("/info",async (req,res)=>{

  try{
    const ans = await User.find({});
    res.send(ans);
  }catch(error){
    console(error);
  }
  
});


// post data to database 
app.post("/info",async (req,res)=>{
   
    // 1st way
    // const ans = new User(req.body);
    // await ans.save();

    // 2nd way
    try{
      await User.create(req.body);
      res.send("Data Store Successfull !!!");
    }catch(error){
        console(error);
    }
})


// delete
app.delete("/info",async (req,res)=>{

   try{
      await User.deleteOne(req.body);
      res.send("Deleted Sucessfull");
   }catch(error){
     console(error);
   }
});


//update 
app.put("/info",async (req,res)=>{

    try{

      const result = await User.updateOne({name:"Garima"},{name:"Garima Roy"});
      res.send("Update Successfull");
      
    }catch(error){
        console.log(error);
    }
})

main()
  .then(async () =>{
    console.log("Connected to DB Successfully");

    app.listen(6000,()=>{
        console.log(`Sarver Running at 6000`);
    }) 
  })
  .catch((error) => console.log(error));
