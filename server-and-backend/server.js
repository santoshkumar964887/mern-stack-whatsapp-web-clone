import express from "express";
import messageModel  from './model.js';
import Pusher from 'pusher';
import cors from 'cors';
const app=express();
app.use(express.json())
const pusher = new Pusher({
  appId: '1070904',
  key: '1bfabf99055cfb47bcd5',
  secret: '911f259e7a6a034f2f4f',
  cluster: 'ap2',
  encrypted: true
});
app.use(cors());
// app.use((req,res,next)=>{
//      res.setHeader("Acccess-Control-Allow-Origin","*");
//      res.setHeader("Acccess-Control-Allow-Headers","*");

//   next()

// })

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
  const messagecollection=db.collection("messages");
  const changestrem= messagecollection.watch();
  changestrem.on("change",(change)=>{
    if(change.operationType==='insert'){
      const messageChange=change.fullDocument;
      pusher.trigger('messages','inserted',{
      message: messageChange.message,
      name:messageChange.name,
      timestam:messageChange.timestam,
    received:messageChange.received

      });
    }
    else{
      console.log('Error triggering pusher')
    }
  });
})

app.get('/message',(req,res)=>{
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
app.post('/message',(req,res)=>{
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