import mongoose from "mongoose";
const {Schema} = mongoose;
const userSchema = new Schema({
    Name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        reuired:true
    },
},
{timestamps:true}
);
export default mongoose.models.User||mongoose.model("User",userSchema);