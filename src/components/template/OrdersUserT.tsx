"use client"
import useSWR from "swr"
import RenderOrder from "../modules/RenderOrder"
import { IOrder } from "@/interface/interfaces"
interface Iprops{
    username:string
}

const fetcher = (url) => fetch(url).then((res) => res.json())
function OrdersUserT({username}:Iprops) {
    const {data,isLoading}=useSWR(`/api/orders/${username}`,fetcher) 
  return (
    <>
    {isLoading ? (  <div className="w-full h-[55vh] flex items-center justify-center">
        <div className="size-28 rounded-[50%] border-[6px] border-r-transparent border-l-transparent border-dotted border-red-600 my-hover animate-spin ">
        </div>
    </div>) : (<div>
      <h3 className="my-2 font-normal text-lg">سفارشات</h3>
      {data?.data.length ? (data?.data.map((i:IOrder)=>(
        <RenderOrder key={i._id} item={i}/>
      ))): (
        <p className="w-full font-medium text-lg text-center mt-5">تاکنون ازما خریدی نکردید 🥲</p>
      )}
    </div>)}
    </>
  )
}

export default OrdersUserT