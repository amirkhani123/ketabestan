"use server"
import Mcategory from "@/models/Mcategory";
const formActionAdd= async(form:FormData):Promise<{message:string,status:string}>=>{
    try {
    const categoryInput=form.get("category") as string;
    if(!categoryInput.length) return {message:"مقادیر کامل وارد کنید",status:"failed"};
    const exsited=await Mcategory.findOne({name:categoryInput});
    if(exsited)return {message:"دسته بندی تکراری است !",status:"failed"};
        await Mcategory.create({name:categoryInput});
        return {message:"با موفقیت اضافه شد :)",status:"success"};
    } catch{
        return {message:"مشکلی در سمت سرور رخ داده است",status:"failed"};
    }
 }
 const deleteCategory=async(id):Promise<{message:string,status:string}>=>{
    try{
      await Mcategory.deleteOne({_id:id});
      return {message:"با موفقیت حذف شد :)",status:"success"};
    }catch{
        return {message:"مشکلی در سمت سرور رخ داده است",status:"failed"};
    }
}

 export {formActionAdd,deleteCategory};