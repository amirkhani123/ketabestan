import connectDB from "@/connections/connectDB";
import Morders from "@/models/orders";
import UserM from "@/models/UserM";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
interface Iinputs{
    params:{username:string}
}
export async function GET(res,{params}:Iinputs) {
    
   try {
    const session=await getServerSession(authOptions);
    if(!session)return NextResponse.json({message:"ابتدا لاگین کنید",type:"failed"},{status:401})
        const {username}= params;
    if(!username)return NextResponse.json({message:"اطلاعات کامل نیست ",type:"failed"},{status:402})
    await connectDB()
       const [user]=await UserM.aggregate([
        {$match:{username}},
        {
            $lookup:{
                from:"morders",
                localField:"username",
                foreignField:"username",
                as:"orders"
            }
        }
       ])
       return NextResponse.json({data:user.orders,type:"success"},{status:200})
   } catch  {
    return NextResponse.json({message:"مشکلی سمت سرور رخ داده است",type:"failed"},{status:500})
   }
    
}