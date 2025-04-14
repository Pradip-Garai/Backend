const express = require('express');
const app=express();

const BookStore = [
    {id:1, B_name:"Ramayana",author:"Balmiki"},
    {id:2, B_name:"Pother Panchali",author:"Satyajit Ray"},
    {id:3, B_name:"Nexus",author:"Rohit Negi"},
    {id:4, B_name:"Gitanjali",author:"Rabindranath Tagore"},
    {id:5, B_name:"Proloy",author:"Kazi Nuzrul Islam"},
]

// show book data with author name 
app.get("/book",(req,res)=>{
    
    const Book = BookStore.filter(info=> info.author===req.query.author);
    res.send(Book);
})

// Specific book details 
app.get("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const book = BookStore.find(info=> info.id===id);
    res.send(book);
})

//save data at backend
app.use(express.json());
app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data Save Successfully!!!")
})


//update only one or two data (but we can change all )
app.patch("/book",(req,res)=>{
    
   const Book =  BookStore.find(info=> info.id===req.body.id);

   if(req.body.author)
   Book.author=req.body.author;

   if(req.body.B_name)
    Book.B_name=req.body.B_name;

  res.send("Updated Successfull");
})


// update all data 
app.put("/book",(req,res)=>{
    // find id 
    const Book =  BookStore.find(info=> info.id===req.body.id);
    Book.author=req.body.author;
    Book.B_name=req.body.B_name;

    res.send("Updated Successfull");
})


//Delete Data
app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = BookStore.findIndex(info=> info.id=== id);
    BookStore.splice(index,2);  
    // here 2 means after the excet id 2 index delete means if  id is 2 so delete 2 and 3 index

    res.send("Delete Successfull!!!");
})

app.listen(5000,()=>{
    console.log("Server Running at 5000");
})