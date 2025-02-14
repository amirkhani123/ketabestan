
import { authOptions } from '@/utils/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata:Metadata={
       title:"کتابستان | پنل ادمین"
}
async function layout({children}) {
    const session=await getServerSession(authOptions);
   if(session?.user?.role!="ADMIN"){
          redirect("/dashboard")
   }
  return (
   <>
   {children}
   </>
  )
}

export default layout