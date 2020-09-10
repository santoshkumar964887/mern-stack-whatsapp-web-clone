import mongoose from 'mongoose';
const schema= mongoose.Schema({
    message: String,
    name:String,
    timestam:String,
    received:Boolean

});

export default model= mongoose.model("message",schema);