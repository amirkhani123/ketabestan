"use client"
import useSWR from "swr";
import RenderOrder from "../modules/RenderOrder";
import { IOrder } from "@/interface/interfaces";
const fetcher = (url) => fetch(url).then((res) => res.json());
function OrdersAdminT() {
    const {data, isLoading}=useSWR("/api/orders",fetcher);
  return (
    <>
    {isLoading ? (<div className="w-full h-[55vh] flex items-center justify-center">
        <div className="size-28 rounded-[50%] border-[6px] border-r-transparent border-l-transparent border-dotted border-red-600 my-hover animate-spin ">
        </div>
    </div>):(<div>
        <p className="text-lg font-normal my-2">سفارش ها</p>
        <div className="border rounded-lg p-2 border-gray-600">
            {data.data.map((item:IOrder)=>(<RenderOrder key={item._id} item={item}/>))}
        </div>
    </div>)}
    
    </>
  )
}

export default OrdersAdminT