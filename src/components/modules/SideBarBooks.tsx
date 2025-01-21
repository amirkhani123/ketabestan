"use client"
import { Icategories } from "@/interface/interfaces"
import Link from "next/link"
import { useEffect, useState } from "react"
import Loading from "../ui/Loading";

function SideBarBooks() {
    const [allCategories,setAllCategories]=useState<Icategories[]>([]);
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        const fetchCategories=async()=>{
            setIsLoading(true);
            const response=await fetch('/api/book/categories');
            const categories=await response.json();
            if(categories.data.length){
                setIsLoading(false);
                setAllCategories(categories.data);
            }
        };
        fetchCategories();
    },[])
  return (
    <div className="w-[15%] rounded-md shadow-gray flex items-center h-52 flex-col">
        <p className="my-2 font-light text-base">فیلتر ها</p>
        <ul className="">
              {
                isLoading ? (
                    <Loading/>
                ):(
                    allCategories.map(category=>(
                        <li key={category._id} className="my-hover hover:opacity-50 my-1">
                            <Link  href={{pathname:"/books",query:{category:category.name}}}>
                        {category.name}
                    </Link>
                        </li>
                    ))
                )
              }
        
        </ul>
    </div>
  )
}

export default SideBarBooks