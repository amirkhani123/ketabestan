"use client"
import { signOut } from 'next-auth/react'
import React, { useEffect } from 'react'

function SignOutPage() {
    useEffect(()=>{
        signOut({callbackUrl:"/"});
    },[]);
return <p>درحال خروج از حساب کاربری ...</p>
}

export default SignOutPage