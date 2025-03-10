import { model, models, Schema } from "mongoose";

const mySchema=new Schema({
    books:{
        type:[{}],
    },
    username:{
        type:String,
        ref:"userbooks",
    },
    address:{
        type:String
    },
    status:{
        type:String,
        enum:["init","send","arrived"],
    }
},{timestamps:true})
const Morders=models.Morders || model("Morders",mySchema);
export default Morders