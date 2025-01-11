"use client"
import MainLayout from "@/components/layouts/layout/MainLayout"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { Toaster } from "react-hot-toast"

function Providers({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
        <div><Toaster/></div>
       <MainLayout>
       {children}
       </MainLayout>
    </SessionProvider>
  )
}

export default Providers