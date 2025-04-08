"use client"
import Loading from "@/components/ui/Loading";
import { IBook } from "@/interface/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

 function SliderHome(){
 const [books,setBooks]=useState<IBook[]>([])
 const [isLoading,setIsLoading]=useState(false);
 const [indexSlider,setIndexSlider]=useState(0)
 useEffect(() => {
    const interval = setInterval(() => {
      setIndexSlider((prevIndex) => (prevIndex + 1) % books.length); 
    }, 6000);
    return () => clearInterval(interval);
  }, [books]); 
 useEffect(()=>{
    const fetchBook=async()=>{
        setIsLoading(true)
        const res=await fetch(`/api/book`,{cache:"force-cache"});
        const result=await res.json() 
        setIsLoading(false)
        result.data.splice(4)
        if(result.data){
            setBooks(result.data)
        }
    }
    fetchBook()
 },[])

    return(
        <div className="w-full h-[50vh] relative bg-gray-200 rounded-xl p-2 overflow-hidden max-sm:h-[25vh] max-sm:p-0 ">
            {isLoading ? 
                <Loading/>
                :
                books.map((item:IBook,index)=>(
                    <div  key={item._id} className={`w-full h-full   cursor-default absolute inset-0 my-hover p-2 flex  justify-between ${indexSlider === index ? "  opacity-100 z-10" :"  opacity-0 z-0 "} `}>
                        <div className="mt-5">
                            <h1 className="font-medium my-1 text-3xl max-sm:text-base">{item.name}</h1>
                            <h2 className="font-normal my-1 text-lg max-sm:text-base">نویسنده : {item.author}</h2>
                            <h3 className="font-normal my-1 text-lg max-sm:text-base max-sm:hidden">ناشر : {item.publisher}</h3>
                            <h4 className="font-normal my-1 text-lg max-sm:text-base max-sm:hidden">دسته بندی : {item.category}</h4>
                            <Link href={`/books/${item._id}`} className="p-2 px-5 bg-red-500 text-white rounded-lg text-lg mt-8 mr-1 max-sm:mt-1 inline-block my-hover border hover:border-red-500 hover:text-red-500 hover:bg-white ">مشاهده</Link>
                        </div>
                        <Image src={item.image} alt="book.png" width={380} height={350} className=" rounded-lg max-sm:size-40"/>
                    </div>
                ))
            }
            <div className="flex items-center gap-3 absolute left-1/2 bottom-3 ">
            {books.map((item:IBook,index)=>(
                <button key={item._id} className={`w-5 h-1 max-sm:hidden  cursor-pointer z-20  rounded-lg ${indexSlider === index ? "bg-black":" bg-gray-600"}`} onClick={()=>setIndexSlider(index)}></button>
            ))}
            </div>
        </div>
    )
}
export default SliderHome