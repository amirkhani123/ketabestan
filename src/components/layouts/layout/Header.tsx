"use client"

import { Icategories } from '@/interface/interfaces';
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { GoSignIn } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { IoBagHandle } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';

function Header() {
  const session=useSession();
  const [isShowMenu,setIsShowMenu]=useState(false);
  const [categories,setCategories]=useState<Icategories[]>([]);
  useEffect(()=>{
    const customFetch=async()=>{
      try {
        if(!categories?.length){
        const response=await fetch("/api/book/categories");
        const data =await response.json();
          setCategories(data.data);
        }
      } catch {
        toast.error("مشکلی در برقراری ارتباط");
      }
  }
  customFetch();
  },[categories])
  return (
    <header className='w-full h-12 flex items-center justify-between py-1 px-2 my-5 bg-red-600 text-white rounded-lg'>
        <ul className='flex items-center gap-2'>
            <li className='my-hover header-li'><Link href="/">صفحه اصلی</Link></li>
            <li className='my-hover header-li'><Link href="/"> کتاب ها</Link></li>
            <li  onMouseEnter={()=>setIsShowMenu(true)} onMouseLeave={()=>{setIsShowMenu(false)}}><Link href="/" className='my-icons'> دسته بندی  <IoIosArrowDown /> </Link>
            {isShowMenu && (
            <ul className="absolute bg-red-500 shadow-2xl shadow-red-300 rounded-xl w-44 min-h-22 p-2 opacity-0 animate-show">
              {
                categories?.map((category, index) => (
                  <li className='header-li ' key={category._id}><Link href="/category">{category.name}</Link></li>
                ))
              }
            </ul>
            )}
            </li>
            
        </ul>
        <div>
             {session.status=="authenticated" ? (<div className='flex gap-1 items-center  rounded-lg px-1'>
                <Link href="/" className='p-1 cursor-pointer flex justify-center items-center bg-white rounded-md text-center my-hover hover:opacity-60'>
                <IoBagHandle color='#2d3439' size={35} />
                </Link>
                <Link href="/dashboard" className='p-1 cursor-pointer flex justify-center items-center bg-white rounded-md text-center my-hover hover:opacity-60 '>
                <MdOutlineAccountCircle size={35} color='gray' />
                </Link>
                <button onClick={()=>{
                  signOut()
                  toast.success("خدانگهدار👋🏻");
                }} className='p-1 cursor-pointer flex justify-center items-center bg-white rounded-md text-center my-hover hover:opacity-60'>
                <TbLogout color='red' size={35} />
                </button>           
             </div>):(  <Link href="/signin" className='p-1 cursor-pointer flex justify-center items-center bg-white rounded-md text-center my-hover hover:opacity-60 '>
                <GoSignIn  size={35} color='#2d3439' />
                </Link>)}
        </div>
    </header>
  )
}

export default Header