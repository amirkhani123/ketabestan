"use server"
import AddBookT from "@/components/template/AddBookT";
import connectDB from "@/connections/connectDB";
import { IBook } from "@/interface/interfaces";
import BookM from "@/models/BookM";
interface PageProps {
  params: Promise<{bookId:string}>,
  searchParams:Promise<string>,
}

async function ModerateBooksEditPage({params}:PageProps) {
    const {bookId}=await params;
    await connectDB();
    let book = await BookM.findOne({_id:bookId});
    book=JSON.parse(JSON.stringify(book)) as IBook;
  return (
    <AddBookT data={book}/>
  )
}

export default ModerateBooksEditPage