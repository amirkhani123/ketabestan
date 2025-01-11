import connectDB from "@/connections/connectDB";
import Mcategory from "@/models/Mcategory";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectDB()
        const categories=await Mcategory.find();
       return NextResponse.json({data:categories},{status:200})
    }catch{
        return NextResponse.json({message:"مشکلی در سمت سرور رخ داده است"},{status:500})
    }
}