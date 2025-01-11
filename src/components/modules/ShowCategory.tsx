"use client"
import { deleteCategory } from "@/actions/admin/category"
import toast from "react-hot-toast";

function ShowCategory({categories}:{categories:{name:string,_id:string}[]}) {
    const deleteHandler=async(id)=>{
        const {message,status}=await deleteCategory(id);
        if(status=="success"){
            toast.success(message);
        }else{
            toast.error(message);
        }
    }
  return (
    <div className='flex items-center gap-4 flex-wrap mb-3'>
        <p className='text-lg font-normal'>دسته بندی ها : </p>
        {categories.map(item=>(
            <div key={item._id} className="flex  items-center gap-2 border-blue-500 p-1 rounded-md shadow-xl  border text-blue-500 w-fit">
         <p>
              {item.name}
        </p>
        <button  onClick={()=>deleteHandler(item._id)} className='p-1 px-2 rounded-md text-white bg-red-500 w-fit my-hover border hover:bg-white hover:text-red-500 hover:border-red-500 '>حذف کردن</button>
            </div>
        ))}
    </div>
  )
}

export default ShowCategory