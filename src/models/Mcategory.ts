import { model, models, Schema } from "mongoose";

const schemaCategory=new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    }
});
const Mcategory=models.Mcategory || model("Mcategory",schemaCategory);
export default Mcategory;