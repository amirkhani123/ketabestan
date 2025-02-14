import DashboardLayout from "@/components/layouts/DashboardLayout";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import UserM from "@/models/UserM";
import Link from "next/link";
import connectDB from "@/connections/connectDB";
import { authOptions } from "@/utils/auth";
export async function generateMetadata(){
  return {
    title:"کتابستان |  پنل کاربری "
  }
}
export default async function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const session=await getServerSession(authOptions) as {user:{username:string,role:string}};
    if(!session?.user?.username){redirect("/signin")}
    try {
      await connectDB();
       const user=await UserM.findOne({username:session.user.username}).select("-password");
       return (
         <DashboardLayout user={user}>
           {children}
         </DashboardLayout>
       )
     } catch{
      return(
        <div className="flex items-center justify-center w-full h-[70vh] flex-col">
          <p className="font-medium text-xl">مشکلی در برقراری ارتباط پیش آمده است 😶</p>
          <Link href="/" className="text-blue-600">صفحه اصلی</Link>
        </div>
      )
     }
}
