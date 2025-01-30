"use server"
import connectDB from "@/connections/connectDB"
import BookM from "@/models/BookM";
import BooksT from "@/components/template/BooksT"
import { IBook } from "@/interface/interfaces";
async function page({searchParams}:{searchParams:{
  category:string
}}) {
    let allBooks=[];
    const {category}=await searchParams;
        await connectDB();
        allBooks=await BookM.find();
        allBooks=JSON.parse(JSON.stringify(allBooks));
        if(category){
          allBooks=allBooks.filter((book:IBook)=>book.category==category);
        }
        return (
          <BooksT allBooks={allBooks} />
        ) 
}

export default page