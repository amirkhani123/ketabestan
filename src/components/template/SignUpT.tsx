"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import signUpAction from "@/actions/auth/signUpAction"
import { Iformdata } from "@/interface/interfaces";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Submit from "../ui/Submit";
import { useSession } from "next-auth/react";
function SignUpT() {
  const router=useRouter();
  const {status}=useSession();
  useEffect(()=>{
    if(status=="authenticated")router.replace("/");
  },[status]);
    const [isShow,setIsShow]=useState(false);
    const submitHandler=async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const formdata=new FormData(e.currentTarget);
      const data: Iformdata = { username: formdata.get('username') as string,
         password: formdata.get('password') as string,
          repassword: formdata.get('repassword') as string,
    };
   const {status,message}=await signUpAction(data);
   if(status=="success"){
     toast.success(message);
     router.push("/signin");
   }else{
    toast.error(message);
   }
  }
  return (
    <div className="w-full  flex items-center justify-center">
        <form onSubmit={submitHandler} className="bg-white p-1 px-3 rounded-[40px] flex items-center flex-col w-[460px] h-[596px] border border-gray-200 "  >
            <Image src="/images/logo.png" alt="logo.png" width={80} height={84} className="mt-4 mb-2 w-[95px]" />
            <p className="font-extralight text-lg mb-16 ">فرم ثبت نام</p>
            <input type="text" placeholder="نام کاربری" className="my-input" name="username" required minLength={5}  />
            <div className="w-full relative">
            <input type={isShow? "text":"password"} placeholder="رمز عبور" className="my-input " name="password" required minLength={8} />
            <button onClick={(e)=>{{e.preventDefault(); setIsShow(!isShow)}}} className=" absolute left-2 top-4">
              {isShow ? <IoEyeOffOutline size={25} />:<IoEyeOutline size={25}/> }
            </button>
            </div>
            <input type={isShow? "text":"password"} placeholder="تکرار رمز عبور" className="my-input" name="repassword" required minLength={8} />
             <Submit textPrimary="ثبت نام" textSecond="درحال ثبت نام ..."/>
            <Link href="/signin" className="text-red-600 mt-4 text-right w-full text-sm">حساب کاربری دارید ؟</Link>
        </form>
    </div>
  )
}

export default SignUpT;