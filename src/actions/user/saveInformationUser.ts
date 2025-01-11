"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/connections/connectDB";
import { IuserData } from "@/interface/interfaces"
import UserM from "@/models/UserM";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

const saveInformationUserAction=async(data:IuserData)=>{
    try {
        const session=await getServerSession(authOptions);
        if(!session)return{status:"failed",message:"وارد حساب کاربری خود شوید"};
        await connectDB();
       const user=await UserM.findById(new mongoose.Types.ObjectId(data.userId)).select("-password");
       user.firstname=data.firstname;
       user.lastname=data.lastname;
       user.phone=data.phone;
       user.address=data.address;
       await user.save();
       return{status:"success",message:"اطلاعات با موفقیت ثبت شد 😀"};
    } catch  {
        return{status:"failed",message:"مشکلی سمت سرور رخ داده است"};
    }
}
export default saveInformationUserAction