"use server"
import CartT from "@/components/template/CartT"
import connectDB from "@/connections/connectDB"
import UserM from "@/models/UserM";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export async function generateMetadata(){
  return {
    title:"کتابستان | سبد خرید"
  }
}

async function CartPage() {
        await connectDB();
        const session=await getServerSession(authOptions);
        if(!session){
          redirect("/signin");
        }
        let myUser=await UserM.findOne({username:session.user.username});
        myUser=JSON.parse(JSON.stringify(myUser));
  return (
    <CartT myUser={myUser}/>
  )
}

export default CartPage