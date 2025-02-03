"use server";

import BookDetailsT from "@/components/template/BookDetailsT";
import connectDB from "@/connections/connectDB";
import { IBook } from "@/interface/interfaces";
import BookM from "@/models/BookM";

interface PageProps {
  params: Promise<{bookId:string}>,
  searchParams:Promise<string>,
}

export default async function Page({ params }: PageProps) {
  
  try {
    const { bookId } =await params;
    await connectDB();
    const myBook = await BookM.findOne({ _id: bookId });

    if (!myBook) {
      return <div className="flex items-center justify-center w-full h-[65vh]">کتاب مورد نظر یافت نشد.</div>;
    }

    return (
      <div className="flex items-center justify-center w-full h-[65vh]">
        <BookDetailsT myBook={myBook as IBook} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching book details:", error);
    return <div className="flex items-center justify-center w-full h-[65vh]">خطا در دریافت اطلاعات کتاب.</div>;
  }
}