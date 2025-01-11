import { model, models, Schema } from "mongoose";

const schemaBook= new Schema({
    name:String,
    price:Number,
    author:String,
    publisher:String,
    codebook:{
        type:Number,
        default:()=>{
            return Math.floor(100000+Math.random()*900000)
        },
    },
    numberpage:Number,
    datepublish:Date,
    image:String,
    category:String,
},{
    timestamps:true,
})
const BookM=models.BookM || model("BookM",schemaBook);
export default BookM;