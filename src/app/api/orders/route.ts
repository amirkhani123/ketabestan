import connectDB from "@/connections/connectDB";
import Morders from "@/models/orders";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(request:NextRequest){
    try {
        const session=await getServerSession(authOptions);
        const {books,address}=await request.json();
        if(!session.user.username || !books || !address) return NextResponse.json({message:"اطلاعات درست ارسال نشده",type:"failed"},{status:402});
        await connectDB()
        await Morders.create({username:session.user.username,books,address,status:"init"})
        revalidatePath("dashboard/orders");
        return NextResponse.json({message:"سفارش شما با موفقیت ثبت شد :)" ,type:"success"},{status:201})
    } catch {
        return NextResponse.json({message:"مشکلی سمت سرور رخ داده است",type:"failed"},{status:500});
    }
}
export async function GET() {
    try {
        await connectDB()
        const orders= await Morders.find()
        return NextResponse.json({data:orders ,status:"success"},{status:201})
    } catch {
        return NextResponse.json({message:"مشکلی سمت سرور رخ داده است",status:"failed"},{status:500});
    }
}
export async function PATCH(params:NextRequest) {
    try {
        await connectDB();
        const {id}=await params.json();
        if(!id)return NextResponse.json({message:"اطلاعات کامل نیست ",status:"failed"},{status:402})
            const order=await Morders.findOne({_id:id})
        if(order.status=="init")
        {
             order.status = "send"
        }else{
            order.status="arrived"
        }
        await order.save();
        return NextResponse.json({message:"سفارش  با موفقیت اپدیت شد :)" ,status:"success"},{status:200})
    } catch {
        return NextResponse.json({message:"مشکلی سمت سرور رخ داده است",status:"failed"},{status:500});
    }
    
}