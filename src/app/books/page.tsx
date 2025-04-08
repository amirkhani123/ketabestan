"use server"
import BooksT from "@/components/template/BooksT"
import { IBook } from "@/interface/interfaces";
interface Iprops{
searchParams:Promise<{category:string}>
}
export  async function  generateMetadata({searchParams}:Iprops){
  const {category} = await searchParams;
  if(category){
    return {
      title:`کتابستان | ${category}`
    }
  }
  return{
    title:"کتابستان | کتاب ها"
  }
}
  
async function BooksPage({searchParams}:Iprops) {
    const {category}=await searchParams;
    const res=await fetch(`${process.env.MY_URL}/api/book`,{next:{revalidate:604800}});
      let  {data}= await res.json();
        if(category){
          data=data.filter((book:IBook)=>book.category==category);
        }
        return (
            <BooksT allBooks={data} />
        ) 
}

export default BooksPage