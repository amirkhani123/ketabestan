import { model, models, Schema } from "mongoose";

const schemaUser=new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        default:"USER",
        type:String,
    },
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    phone:{
        type:String
    },
    address:{
        type:String
    }
},{timestamps:true});

const UserM=models.UserBook || model("UserBook",schemaUser);
export default UserM;