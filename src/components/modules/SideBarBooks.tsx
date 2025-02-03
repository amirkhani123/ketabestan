"use client"
import { Icategories } from "@/interface/interfaces"
import Link from "next/link"
import { useEffect, useState } from "react"
import Loading from "../ui/Loading";
import { useSearchParams } from "next/navigation";


function SideBarBooks() {
    const [allCategories,setAllCategories]=useState<Icategories[]>([]);
    const [isLoading,setIsLoading]=useState(false);
   const [searchParams]=useSearchParams();
   let selectCategory="all";
   if(searchParams){
       selectCategory=searchParams[1];
   }
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
    <div className="w-[13%] rounded-md shadow-gray flex items-center h-52 flex-col ">
        <p className="my-2 font-light text-base">فیلتر ها</p>
        <ul className="">
              {
                isLoading ? (
                    <Loading/>
                ):(
                    <>
                     <li className={`${selectCategory=="all" ?"hover-li-static":"hover-li" }`}><Link href={{pathname:"/books"}}>همه</Link></li>
                     {
                    allCategories.map(item=>(
                        <li key={item._id} className={`mt-1 ${selectCategory==item.name ?"hover-li-static":"hover-li" }`}>
                            <Link  href={{pathname:"/books",query:{category:item.name}}}>
                        {item.name}
                    </Link>
                        </li>
                    ))
                    }
                    </>
                )
              }
        
        </ul>
    </div>
  )
}

export default SideBarBooks