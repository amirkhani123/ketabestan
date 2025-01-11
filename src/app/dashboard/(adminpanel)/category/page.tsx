"use server"
import AddCategory from "@/components/modules/AddCategory";
import ShowCategory from "@/components/modules/ShowCategory";
import Mcategory from "@/models/Mcategory"

async function page() {
    
    const categories= JSON.parse(JSON.stringify( await Mcategory.find()));
  return (
   <>
   {categories.length ? ( <ShowCategory categories={categories}/>):  <p className="text-lg font-light">هیچ دسته بندی یافت نشد ! </p> }
   <AddCategory/>
   </>
  )
}

export default page