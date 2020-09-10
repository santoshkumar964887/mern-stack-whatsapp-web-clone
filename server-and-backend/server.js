import express from "express";
import messageModel  from './model.js';
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
app.get('/api/v1/message',(req,res)=>{
    messageModel.find((err,data)=>{
      if(err){
        res.status(500).json({
          status:"fail",
          error:err,
          message:"somthing went wrong"
        });
      }
      else{
        res.status(200).json({
          status:"success",
          
            data:data
          
        })
      }

    })
});
app.post('/api/v1/message',(req,res)=>{
   messageModel.create(req.body,(err,data)=>{
     if(err){
       res.status(500).json({
         status:"fail",
         error:err,
         message:"somthing went wrong"
       });
     }
     else{
       res.status(200).json({
         status:"success",
         
           data:data
         
       })
     }
   })
})

app.listen(port,(err)=>{
  console.log(err);
    console.log("your app is running on port"+port);

})