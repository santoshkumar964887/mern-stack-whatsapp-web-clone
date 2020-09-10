import express from "express";
import whatsappModel from './model';
const app=express();
app.use(express.json())
const port=process.env.port||5000;
import mongoose from 'mongoose';
const mongodburl="mongodb+srv://Santosh964884:Santosh737982@@cluster0.wtsz3.mongodb.net/whatsapp-clone?retryWrites=true&w=majority"
mongoose.connect(mongodburl,{
  useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser:true,
    useUnifiedTopology: true,  
}).then((con)=>{
  console.log("connected into database");
})
app.get('/',(req,res)=>{
    res.status(200).send("Hello from route");
}



)
app.listen(port,(err)=>{
  console.log(err);
    console.log("your app is running on port"+port);

})