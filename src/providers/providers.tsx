"use client"
import MainLayout from "@/components/layouts/layout/MainLayout"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { Provider } from "react-redux"
import { Toaster } from "react-hot-toast"
import myStore from "@/redux/store/store"
function Providers({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
        <div><Toaster/></div>
       <Provider store={myStore}>
       <MainLayout>
       {children}
       </MainLayout>
       </Provider>
    </SessionProvider>
  )
}

export default Providers