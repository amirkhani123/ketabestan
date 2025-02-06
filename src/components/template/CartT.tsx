"use client"
import { IBook, IstateCard, Iuser } from "@/interface/interfaces";
import { useGetCart } from "@/redux/fetures/cartSlice"
import Image from "next/image";
import Control from "../modules/Control";
import Link from "next/link";
import { useState } from "react";
import ModalCheckOutT from "../modules/ModalCheckOutT";
import toast from "react-hot-toast";
function CartT({myUser}:{myUser:Iuser}) {
    const state=useGetCart() as IstateCard;
    const [isChecked,setIsChecked]=useState(false);
  return (
    <div className="flex justify-between max-sm:flex-col max-sm:items-center ">
        <div className="w-[70%] min-h-[250px] p-1 shadow-gray rounded-lg max-sm:w-full" >{!state.books.length ? ( <p className="w-full text-center font-light text-lg mt-3">هیچ کتابی یافت نشد !</p>): (
            state.books.map((book:IBook)=>(
                <div key={book._id} className="w-full flex items-center justify-between pl-2 h-[100px] rounded-lg shadow-gray overflow-hidden my-1">
                  <Image className="max-sm:w-[85px] max-sm:h-full" src={book.image} alt="image.png" width={100} objectFit="cover" height={200} loading="eager" placeholder="blur" blurDataURL="/images/loading.png"/>
                  <p className="font-light text-lg max-sm:hidden">{book.name}</p>
                  <p className="text-center  text-gray-700 font-normal text-lg mt-1">{book.price.toLocaleString("fa-ir")} تومان</p>
                  <div className="w-[150px] h-[35px] text-white" >
                    <Control myBook={book} />
                  </div>
                </div>
            ))
        )}</div>
        <div className="w-[15%] min-h-[250px] p-1 shadow-gray rounded-lg ml-5 flex flex-col justify-between max-sm:w-full max-sm:mt-2 max-sm:mx-2 max-sm:min-h-[80px] ">
          <div>
            <p className="flex justify-between items-center font-normal text-lg">مبلغ کل: <span className="ml-2 font-normal text-lg">{state.totalPrice.toLocaleString("fa-ir")}</span></p>
            <p className="flex justify-between items-center mt-2 font-normal text-lg">تعداد کل: <span className="ml-2 font-normal text-lg">{state.totalQty.toLocaleString("fa-ir")}</span></p>
          </div>
            {myUser.firstname ? ( <button className="my-submit" onClick={()=>{
              if(state.books.length){
                setIsChecked(true);
              }else{
                toast.error("ثبت خرید شما خالی است 😶");
              }
            }}> {isChecked ? "درحال ثبت نهایی ...":"ثبت نهایی خرید"}</button>):(<Link className="but-green text-center" href={`/dashboard/account/${myUser._id}`}>ثبت نهایی اطلاعات</Link>)}
        </div>
        {isChecked && <ModalCheckOutT setIsChecked={setIsChecked} myUser={myUser}/>}
    </div>

  )
}

export default CartT