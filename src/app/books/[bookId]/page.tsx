"use server";

import BookDetailsT from "@/components/template/BookDetailsT";
import connectDB from "@/connections/connectDB";
import { IBook } from "@/interface/interfaces";
import BookM from "@/models/BookM";
interface PageProps {
  params: Promise<{bookId:string}>,
  searchParams:Promise<string>,
}
export async function generateMetadata({params}:PageProps) {
  const res=await fetch(`${process.env.MY_URL}/api/book`);
  const {data}=await res.json();
  const {bookId}=await params;
  const book=data.find((item)=> {return item._id == bookId});
  return{
    title:`کتابستان | ${book?.name}`,
    authors:{name:book.author}
  }
}
export default async function BooksPageDetails({ params }: PageProps) {
  try {
    const { bookId } =await params;
    await connectDB();
    let myBook = await BookM.findOne({ _id: bookId });
     myBook=JSON.parse(JSON.stringify(myBook)) as IBook[];  
    if (!myBook) {
      return <div className="flex items-center justify-center w-full h-[65vh]">کتاب مورد نظر یافت نشد.</div>;
    }

    return (
      <div className="flex items-center justify-center w-full h-[65vh] max-sm:flex-col max-sm:h-full">
        <BookDetailsT myBook={myBook as IBook} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching book details:", error);
    return <div className="flex items-center justify-center w-full h-[65vh]">خطا در دریافت اطلاعات کتاب.</div>;
  }
}
