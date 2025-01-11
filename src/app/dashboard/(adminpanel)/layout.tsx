import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation';
import React from 'react'

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