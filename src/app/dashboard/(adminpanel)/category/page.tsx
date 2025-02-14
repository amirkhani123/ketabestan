"use client"
import AddCategory from "@/components/modules/AddCategory";
import ShowCategory from "@/components/modules/ShowCategory";
import Loading from "@/components/ui/Loading";
import { useCategories } from "@/hooks/hooks";
import { IuseCategories } from "@/interface/interfaces";

 function CategoryPage() {
    
    const {categories}=useCategories() as IuseCategories ;
     return (
   <>
   {categories ? ( <ShowCategory categories={categories}/>): <Loading/> }
   <AddCategory/>
   </>
  )
}

export default CategoryPage