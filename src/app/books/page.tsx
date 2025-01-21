"use server"
import connectDB from "@/connections/connectDB"
import BookM from "@/models/BookM";
import BooksT from "@/components/template/BooksT"

async function page() {
    let allBooks=[];
 
        await connectDB();
        allBooks=await BookM.find();
        allBooks=JSON.parse(JSON.stringify(allBooks));
        return (
          <BooksT allBooks={allBooks} />
        ) 
 
}

export default page