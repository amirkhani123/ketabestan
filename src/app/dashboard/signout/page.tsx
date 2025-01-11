"use client"
import { signOut } from 'next-auth/react'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

function SignOut() {
    useEffect(()=>{
        signOut({callbackUrl:"/"});
    },[]);
return <p>درحال خروج از حساب کاربری ...</p>
}

export default SignOut