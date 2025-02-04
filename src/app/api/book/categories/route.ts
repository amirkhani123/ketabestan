import connectDB from "@/connections/connectDB";
import Mcategory from "@/models/Mcategory";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectDB()
        const categories=await Mcategory.find();
       return NextResponse.json(categories,{status:200});
    }catch{
        return NextResponse.json({error:"مشکلی در سمت سرور رخ داده است"},{status:500})
    }
}