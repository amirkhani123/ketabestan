"use client"
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
function SignInT() {
  const {status}=useSession();
  const router=useRouter();
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    if(status=="authenticated")router.replace("/");
  },[status,router]);
    const [isShow,setIsShow]=useState(false);
    const [formValue,setFormValue]=useState({
      username:"",
      password:""
    });
    const changeHandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setFormValue(formValue=>({...formValue,[e.target.name]:e.target.value}));
    };
    const submitHandler=async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault();
      setIsLoading(true);
      const result= await signIn("credentials",{...formValue,redirect:false});
      setIsLoading(false);
      if(result?.error){
        toast.error(result.error);
      }else
      {
        toast.success("خوش آمدید 🌹");
      }
    }
  return (
    <div className='w-full  flex items-center justify-center'>
    <form className='w-[470] h-[523] bg-white rounded-[40px] p-1 px-3 flex items-center flex-col  border-gray-200'>
        <Image src="/images/logo.png" alt='image.png' width={100} height={100} className='w-[95px] mt-4 mb-2'/>
        <p className='text-xl font-extralight mb-10'>ورود</p>
        <input type='text' placeholder='نام کاربری' name='username' className='my-input' value={formValue.username} onChange={changeHandler} required minLength={8} />
        <div className='w-full relative'>
            <input type={isShow? "text":"password"} placeholder='رمز عبور' name='password' className='my-input' value={formValue.password} onChange={changeHandler} required minLength={8}/>
            <button onClick={(e)=>{{e.preventDefault(); setIsShow(!isShow)}}} className=" absolute left-2 top-4">
              {isShow ? <IoEyeOffOutline size={25} />:<IoEyeOutline size={25}/> }
            </button>
        </div>
        <button type="submit" className="my-submit my-hover disabled:opacity-50" onClick={submitHandler} disabled={isLoading} >
          {isLoading ? " درحال ورود ... ":"ورود"}
        </button>
        <Link href="/signup" className="text-red-600 mt-4 text-right w-full text-sm">ایجاد حساب کاربری!</Link>
    </form>
    </div>
  )
}


export default SignInT