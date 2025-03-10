import connectDB from "@/connections/connectDB";
import BookM from "@/models/BookM";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        console.log("fetch :)")
        await connectDB();
        const books=await BookM.find();
       return NextResponse.json({data:books},{status:200});
    } catch{
        return NextResponse.json({message:"مشکلی پیش آمده است"},{status:500});
    }
}