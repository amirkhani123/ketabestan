import { getServerSession } from "next-auth/next";
import { NextResponse, type NextRequest } from "next/server";
import connectDB from "@/connections/connectDB";
import BookM from "@/models/BookM";
import { authOptions } from "@/utils/auth";

export async function POST(request: NextRequest) {
    try {
    const session=await getServerSession(authOptions);
    if(session?.user?.role != "ADMIN") return NextResponse.json({message:"شما ادمین نیستید !",status:"failed"},{status:403,});
        await connectDB();
        const data=await request.json();
        const {name,price,author,publisher,datepublish,numberpage,image,category}=data;
        if(!name || !price || !author || !publisher  || !datepublish || !numberpage || !image || !category) return NextResponse.json({
            message: "لطفا اطلاعات را کامل پر کنید",status:"failed"
        },{status:400});
        const exsitedBook=await BookM.findOne({name:name});
        if(exsitedBook) return NextResponse.json({message:"کتاب تکراری است !",status:"failed"},{
            status:400,
        })
        await BookM.create(data);
        return NextResponse.json({message:"با موفقیت ثبت شد :)",status:"success"},{
            status:201,
        })         
    } catch{
        return  NextResponse.json({message:"server not connect !"},{
        status:500,
    });
    }
}
