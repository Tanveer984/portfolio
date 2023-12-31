import mongoose from "mongoose";

const {Schema} = mongoose;
const postSchema = new Schema({
    title:{
        type:String,
        unique:true,
        required:true

    },
    desc:{
        type:String,
        required:true

    },
    img:{
        type:String,
        required:true

    },
    userName:{
        type:String,
        required:true

    },
    content:{
        type:String,
        required:true,

    },
},
{timestamps:true}
);
export default mongoose.models.Post||mongoose.model("Post",postSchema);