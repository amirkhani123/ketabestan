"use server"

import BookDetailsT from "@/components/template/BookDetailsT";
import connectDB from "@/connections/connectDB";
import { IBook } from "@/interface/interfaces";
import BookM from "@/models/BookM";

async function page({params}:{params:{bookId:string}}) {
    const {bookId}=await params;
    await connectDB();
    let myBook=await BookM.findOne({_id:bookId});
    myBook=JSON.parse(JSON.stringify(myBook)) as IBook;
  return (
    <div className="flex items-center justify-center w-full h-[65vh] ">
        <BookDetailsT myBook={myBook}/>
    </div>
  )
}
export default page


