import express from 'express';
import { Auth } from './Middleware/auth.js';
const app=express();
const port = 8000;


//CURD Operation : Create,Read,Update,Delete

app.use(express.json());

//Database
const FoodMenu = [
    { id: 1, food: "Egg Roll", category: "Non-Veg", price: 150 },
    { id: 2, food: "Chicken Biryani", category: "Non-Veg", price: 250 },
    { id: 3, food: "Paneer Butter Masala", category: "Veg", price: 180 },
    { id: 4, food: "Veg Pulao", category: "Veg", price: 120 },
    { id: 5, food: "Mutton Kebab", category: "Non-Veg", price: 200 },
    { id: 6, food: "Butter Chicken", category: "Non-Veg", price: 220 },
    { id: 7, food: "Dal Tadka", category: "Veg", price: 100 },
    { id: 8, food: "Chole Bhature", category: "Veg", price: 130 },
    { id: 9, food: "Fish Fry", category: "Non-Veg", price: 180 },
    { id: 10, food: "Aloo Paratha", category: "Veg", price: 90 },
    { id: 11, food: "Chicken Shawarma", category: "Non-Veg", price: 120 },
    { id: 12, food: "Veg Sandwich", category: "Veg", price: 70 },
    { id: 13, food: "Chicken Tikka", category: "Non-Veg", price: 150 },
    { id: 14, food: "Cheese Pizza", category: "Veg", price: 250 },
    { id: 15, food: "Veg Burger", category: "Veg", price: 90 },
    { id: 16, food: "Mutton Biryani", category: "Non-Veg", price: 300 },
    { id: 17, food: "Samosa", category: "Veg", price: 40 },
    { id: 18, food: "Prawn Curry", category: "Non-Veg", price: 220 },
    { id: 19, food: "Hakka Noodles", category: "Veg", price: 150 },
    { id: 20, food: "Lamb Chop", category: "Non-Veg", price: 280 }
];

//  Middleware Authentication check 
app.use("/admin",Auth);

// see all food items
app.get("/food",(req,res)=>{
    console.log("All Food List !!!");
    res.status(200).send(FoodMenu);
});

// add food item
app.post("/admin",(req,res)=>{

    // Add item into food menu 

    FoodMenu.push(req.body);
    res.send("Item Added Successfully !!!");
});


// delete food iteam
app.delete("/admin/:id",(req,res)=>{
   // Delete item into food menu 

    const id = parseInt(req.params.id);
    const index = FoodMenu.findIndex(item=> item.id===id);
    FoodMenu.splice(index,1);
    res.send("Delete successfull!!!");
});


// update food details 
app.patch("/admin",(req,res)=>{
    // Delete item into food menu 
        
        const id= parseInt(req.body.id);
        const foodData = FoodMenu.find(item=> item.id===id);

        if(foodData){

          if(req.body.food){
             foodData.food = req.body.food;
          }

          if(req.body.category){
            foodData.category = req.body.category;
         }

         if(req.body.price){
            foodData.price = req.body.price;
         }

          res.send(foodData);
        }else{
            res.send("Item Not Exist!!!"); 
        }
 });

 //user cart to add food
const Cart = [];

//user add item into cart
app.post("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const Food = FoodMenu.find(item=> item.id===id);

    if(Food){
        Cart.push(Food);
        res.status(200).send("Item Added Successfull!!!");
    }else{
        res.send("Item Out Of Stock");
    }
});

//user delete item into cart
app.delete("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index = Cart.findIndex(item=> item.id===id);
    if(index!=-1){
        Cart.splice(index,1);
        res.status(200).send("Item removed !!!");
    }else{
        res.send("Item Not Present at cart !!!");
    }
});


//user see at his cart item
app.get("/user",(req,res)=>{
    if(Cart.length==0){
        res.send("Cart is Empty!!!");
    }else{
        res.send(Cart);
    }
})

app.listen(port,()=>{
  console.log(`Server Running at localhost:${port}`);
});


