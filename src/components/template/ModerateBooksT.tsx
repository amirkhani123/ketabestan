"use client"
import { IBook } from "@/interface/interfaces";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../ui/Loading";
import Image from "next/image";
import Link from "next/link";

function ModerateBooksT() {
    const [allBooks,setAllBooks]=useState<IBook[]>();
    const [isLoading,setIsLoading]=useState(false);
    const getBooks=async()=>{
        setIsLoading(true)
        const res=await fetch("/api/book");
        const data=await res.json();
        if(data.data){
            setIsLoading(false);
            setAllBooks(data.data);
         }else{
            toast.error(data.error);
         }
    }
  useEffect(()=>{
    getBooks();
  },[]);
  const deleteHandler=async(bookid:string)=>{
    const res=await fetch(`/api/book/${bookid}`,{
      method:"DELETE"
    });
    const {message,status}=await res.json();
    if(status==="success"){
      toast.success(message);
      getBooks();
    }else{
      toast.error(message);
    }
  }
  return (
    <div>
        {isLoading ? <Loading/>:(<div className="flex flex-col gap-1">
            {allBooks?.map((item:IBook)=>(
                 <div key={item._id} className=" w-[40%] flex items-center justify-between rounded-lg p-1 shadow-gray ">
                    <Image src={item.image} width={50} height={50} alt="image.png" />
                    <p>{item.name}</p>
                    <div className="flex gap-3 items-center">
                    <Link href={`/dashboard/moderateBooks/${item._id}`} className="but-green">ویرایش</Link>
                    <button className="my-submit text-base mt-0 rounded-md p-1 px-2" onClick={()=>deleteHandler(item._id as string)}>حذف</button>
                    </div>
                 </div>
            ))}
        </div>)}
    </div>
  )
}


export default ModerateBooksT