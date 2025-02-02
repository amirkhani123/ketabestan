"use client"
import { IBook, IstateCard } from "@/interface/interfaces";
import { addBook, decrement, deleteBook, increment, useGetCart } from "@/redux/fetures/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
function Control({myBook}:{myBook:IBook}) {
    const state=useGetCart() as IstateCard;
    const dispatch=useDispatch();
    const isBookToCart=state.books.find(item=>item._id===myBook._id);
  return (
    <>
        {isBookToCart ? (
          <div className="w-full h-full rounded-md  bg-red-500 flex items-center justify-between px-2">
               <button className="size-6 rounded-sm  bg-white text-red-500 text-center my-hover hover:opacity-50" onClick={()=>{dispatch(increment(myBook))}}><IoMdAdd size={30} /></button>
               <span className="font-light text-lg">{isBookToCart.qty}</span>
               {
                isBookToCart.qty==1 ?(
                  <button className="size-6 rounded-sm  bg-white text-red-500 text-center my-hover hover:opacity-50 pr-px" onClick={()=>{dispatch(deleteBook(myBook))}}><FaRegTrashAlt  size={26} /></button>
                ) :(
                  <button className="size-6 rounded-sm  bg-white text-red-500 text-center my-hover hover:opacity-50" onClick={()=>{dispatch(decrement(myBook))}}><IoIosRemove size={30} /></button>
                )
               }
        </div>):(
            <button className="w-full h-full font-light text-lg rounded-md bg-red-500 my-hover hover:opacity-50" onClick={()=>{dispatch(addBook(myBook))}}>افزودن به سبد خرید</button>
        )}
    </>
  )
}

export default Control