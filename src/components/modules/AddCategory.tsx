"use client"
import { formActionAdd } from "@/actions/admin/category"
import toast from "react-hot-toast";
import { IoIosAddCircleOutline } from "react-icons/io"
function AddCategory() {
  return (
    <form action={async(form:FormData)=>{
     const {message,status}=await formActionAdd(form);
     if(status=="success"){
        toast.success(message);
    }else{
        toast.error(message);
     }
    }} >
        <p className="my-icons w-fit"><IoIosAddCircleOutline />اضافه کردن دسته بندی جدید</p>
        <input type="text" placeholder="دسته بندی جدید ..." className="form-input-book outline-none " name="category" />
        <button className="but-green">اضافه کردن </button>
    </form>
  )
}

export default AddCategory