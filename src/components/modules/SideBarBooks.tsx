"use client"
import {  IuseCategories } from "@/interface/interfaces"
import Link from "next/link"
import Loading from "../ui/Loading";
import { useSearchParams } from "next/navigation";
import { useCategories } from "@/hooks/hooks";

function SideBarBooks() {
    const{categories,isLoading}=useCategories()as IuseCategories;
   const [searchParams]=useSearchParams();
   let selectCategory="all";
   if(searchParams){
       selectCategory=searchParams[1];
   }
  

  return (
    <div className="w-[13%] rounded-md shadow-gray flex items-center h-52 flex-col  max-sm:hidden ">
        <p className="my-2 font-light text-base">فیلتر ها</p>
        <ul>
              {
                isLoading ? (
                    <Loading/>
                ):(
                    <>
                     <li className={`${selectCategory=="all" ?"hover-li-static":"hover-li" }`}><Link href={{pathname:"/books"}}>همه</Link></li>
                     {
                    categories.map(item=>(
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