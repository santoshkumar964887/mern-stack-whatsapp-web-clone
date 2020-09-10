import express from "express";
import messageModel  from './model.js';
import Pusher from 'pusher';
const app=express();
app.use(express.json())
const pusher = new Pusher({
  appId: '1070904',
  key: '1bfabf99055cfb47bcd5',
  secret: '911f259e7a6a034f2f4f',
  cluster: 'ap2',
  encrypted: true
});

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

const db=mongoose.connection;
db.once("open",()=>{
  const messagecollection=db.collection("message");
  const changestrem= messagecollection.watch();
  changestrem.on("change",(change)=>{
    if(change.operationType==="insert"){
      const messageDetails=change.fullDocument;
      console.log(messageDetails)
      // pusher.trigger("message",'inserted')
    }
  })
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