import InformationUser from '@/components/modules/InformationUser';
import InputsAccount from '@/components/modules/InputsAccount';
import connectDB from '@/connections/connectDB';
import UserM from '@/models/UserM';
import mongoose from 'mongoose';
import Link from 'next/link';
import React from 'react'
interface Iprops{
  params:Promise<{userId:string}>,
  searchParams:Promise<string>,
}
async function AccountPage({params}:Iprops) {
  let {userId}=await params;
  
  try {
    await connectDB();
    if (userId.endsWith('%7D')) { userId = userId.slice(0, -3); }
    let user=await UserM.findById(new mongoose.Types.ObjectId(userId)).select("-password");
    if(user.firstname){
      user=JSON.parse(JSON.stringify(user));
      return <InformationUser user={user} />
    }else{
      return(<InputsAccount userId={userId}  />)
    }
    
  } catch  {
    return(
      <div className="flex items-center justify-center w-full h-[70vh] flex-col">
        <p className="font-medium text-xl">مشکلی در برقراری ارتباط پیش آمده است 😶</p>
        <Link href="/" className="text-blue-600">صفحه اصلی</Link>
      </div>
    )
  }
}

export default AccountPage