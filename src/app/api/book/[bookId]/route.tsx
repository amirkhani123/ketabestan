import connectDB from "@/connections/connectDB";
import BookM from "@/models/BookM";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export async function PUT(req, { params }) {
    try {
        await connectDB();
        const {bookId}=params;
        const session = await getServerSession(authOptions);
        if (session?.user?.role === "ADMIN") {
            const myBook = await BookM.findOne({ _id: bookId });
            const data=await req.json();
            console.log(data)
            const { name, price, author, publisher, datepublish, numberpage, image, category } = data;
            if (!name || !price || !author || !publisher || !datepublish || !numberpage || !image || !category) {
                return NextResponse.json({ message: "لطفا اطلاعات را کامل پر کنید", status: "failed" }, { status: 400 });
            }
            myBook.name = name;
            myBook.price = price;
            myBook.author = author;
            myBook.publisher = publisher;
            myBook.datepublish = datepublish;
            myBook.numberpage = numberpage;
            myBook.image = image;
            myBook.category = category;
            await myBook.save();
            revalidatePath("/books")
            return NextResponse.json({ message: "با موفقیت ویرایش شد 😀", status: "success" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "شما دسترسی ندارید", status: "failed" }, { status: 401 });
        }
    } catch (error){
        console.log(error)
        return NextResponse.json({ message: "مشکلی سمت سرور رخ داده است", status: "failed" }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { bookId } = params;
        const session = await getServerSession(authOptions);
        if (session?.user?.role === "ADMIN") {
            await connectDB();
            if (req.method === "DELETE") {
                await BookM.deleteOne({ _id: bookId });
                revalidatePath("/books")
                return NextResponse.json({ message: "با موفقیت حذف شد 😀", status: "success" }, { status: 200 });
            }
        } else {
            return NextResponse.json({ message: "شما دسترسی ندارید", status: "failed" }, { status: 401 });
        }
    } catch{
        return NextResponse.json({ message: "مشکلی سمت سرور رخ داده است", status: "failed" }, { status: 500 });
    }
}
