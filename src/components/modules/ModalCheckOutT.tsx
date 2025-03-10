import { IstateCard, Iuser } from '@/interface/interfaces'
import { checkOut, useGetCart } from '@/redux/fetures/cartSlice';
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
interface Iprops{
    setIsChecked:React.Dispatch<React.SetStateAction<boolean>>,
    myUser:Iuser
}
function ModalCheckOutT({setIsChecked,myUser}:Iprops) {
    const dispatch=useDispatch();
    const state=useGetCart() as IstateCard;
    const checkOutHandler=async()=>{
      const res=await fetch("/api/orders",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({"books":state.books,"address":myUser.address})
      })
      const result=await res.json()
      if(result.type ==="success"){
        setIsChecked(false);
        dispatch(checkOut());
        toast.success(result.message)
      }else{
        toast.error(result.message)
      }
    }
  return (
    <div className='w-[100vw] h-[60vh] flex items-center justify-center fixed z-10'>
      <div className='  w-[420px] h-[320px] rounded-lg p-2 bg-white'>
        <button className='px-2 py-1 font-normal text-lg bg-gray-200 text-red-600 rounded-lg my-hover hover:opacity-50' onClick={()=>setIsChecked(false)}>X</button>
       <div className='flex items-center justify-between flex-col h-[200px]  mt-3'>
       <p className='font-light text-lg'>سفارش شما با شماره پیگیری 24101384 به آدرس {myUser.address} ارسال شود ؟</p>
       <button className='but-green w-52'onClick={()=>checkOutHandler()} >تایید</button>
       </div>
      </div>
    </div>
  )
}

export default ModalCheckOutT