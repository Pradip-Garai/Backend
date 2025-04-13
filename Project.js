const express = require('express');
const app=express();

const BookStore = [
    {id:1, B_name:"Ramayana",author:"Balmiki"},
    {id:2, B_name:"Pother Panchali",author:"Satyajit Ray"},
    {id:3, B_name:"Nexus",author:"Rohit Negi"},
    {id:4, B_name:"Gitanjali",author:"Rabindranath Tagore"},
    {id:5, B_name:"Proloy",author:"Kazi Nuzrul Islam"},
]

app.get("/book",(req,res)=>{
    res.send(BookStore);
})

// Specific book details 
app.get("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const book = BookStore.find(info=> info.id===id);
    res.send(book);
})

app.use(express.json());
app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data Save Successfully!!!")
})

app.listen(5000,()=>{
    console.log("Server Running at 5000");
})