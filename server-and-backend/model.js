import mongoose from 'mongoose';
const schema= mongoose.Schema({
    message: String,
    name:String,
    timestam:String,
    received:Boolean

});

export default mongoose.model("messages",schema);