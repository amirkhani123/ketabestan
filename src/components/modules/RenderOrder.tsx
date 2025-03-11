import { IApi, IBook, IOrder } from "@/interface/interfaces"
import clsx from "clsx"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

interface Iprops{
    item:IOrder
}
function RenderOrder({item}:Iprops) {
  const [isLoading,setIsLoading]=useState(false)
  const statusHandler=(status:string)=>{
     switch (status) {
      case "init":
        return "درحال آماده سازی"
        case "send":
          return "درحال ارسال"
          case "arrived":
        return "دریافت شده"
      default:
       return "سفارش درست ثبت نشده است"
     }
  }
  const isPathname=usePathname()==="/dashboard/orders"
  const router=useRouter()
  const updateStatusHandler=async()=>{
    setIsLoading(true)
    const res=await fetch("/api/orders",{
    method:"PATCH",
    body:JSON.stringify({id:item._id}),
    headers:{"Content-Type":"application/json"}
    })
    const {status,message}=await res.json() as IApi
    setIsLoading(false)
    if(status==="success"){
      toast.success(message)
      router.refresh()
    }else{
      toast.error(message)
      router.refresh()
    }
  }
  return (
    <div className="border border-gray-300 rounded-lg p-1 flex items-center flex-col my-1 ">
        <p>{item._id}</p>
        <p>{item.username}</p>
        <p>{item.address}</p>
        <div className="p-1 border rounded-md w-full text-center">
            {item.books.map((i:IBook)=>(
                <div key={i._id}><p>{i.name} <span>تعداد : {i.qty}</span></p></div>
            ))}
        </div>
        <div className="flex items-center gap-2 mt-2">
        <p className={clsx("font-normal ",{
          "text-green-400":item.status==="init",
          "text-green-500":item.status==="send",
          "text-green-600":item.status==="arrived"
        })}>{statusHandler(item.status)}</p>
        {isPathname && <button disabled={isLoading} className="font-normal  p-1 rounded-xl border-purple-500 border text-purple-500 my-hover hover:opacity-50 disabled:opacity-50" onClick={updateStatusHandler}> {isLoading ? " درحال آپدیت ...":"مرحله بعد"}</button>}
        </div>
    </div>
  )
}

export default RenderOrder