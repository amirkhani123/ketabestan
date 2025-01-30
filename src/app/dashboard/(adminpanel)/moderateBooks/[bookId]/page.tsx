"use server"
import AddBookT from "@/components/template/AddBookT";
import connectDB from "@/connections/connectDB";
import { IBook } from "@/interface/interfaces";
import BookM from "@/models/BookM";
async function page({params}:{params:{bookId:string}}) {
    const {bookId}=await params;
    await connectDB();
    let book = await BookM.findOne({_id:bookId});
    book=JSON.parse(JSON.stringify(book)) as IBook;
  return (
    <AddBookT data={book}/>
  )
}

export default page