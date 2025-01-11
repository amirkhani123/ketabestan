"use server"
import connectDB from "@/connections/connectDB";
import { Iformdata } from "@/interface/interfaces";
import UserM from "@/models/UserM";
import { hashedPasswordFa } from "@/utils/auth";
const signUpAction=async(data:Iformdata)=>{
    const {username,password,repassword}=data;
    if(!password.length || !repassword.length || !username.length) return {status:"failed",message:"مقادری را کامل وارد کنید 😡"};
    if(password!= repassword)return {status:"failed",message:"رمز عبور با تکرار آن مطابقت ندارد"};
   try {
    await connectDB();
    const exisited=await UserM.findOne({username:username});
    if(exisited)return {status:"failed",message:"نام کاربری در دیتابیس وجود دارد"};
    const hashedPassword=await hashedPasswordFa(password);
    await UserM.create({username,password:hashedPassword});
    return {status:"success",message:"با موفقیت ثبت نام شدید ❤️"};
   } catch (error) {
    console.log(error)
    return {status:"failed",message:"مشکلی در سمت سرور رخ داده "}
   }
}
export default signUpAction;