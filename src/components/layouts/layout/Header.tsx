"use client"

import CategoriesLi from '@/components/modules/CategoriesLi';
import Loading from '@/components/ui/Loading';
import {  useCategories } from '@/hooks/hooks';
import { IuseCategories } from '@/interface/interfaces';
import { useGetCart } from '@/redux/fetures/cartSlice';
import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { GoSignIn } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp, IoMdMenu } from 'react-icons/io';
import { IoBagHandle, IoHomeOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { TbLogout,TbBooks, TbCategory } from 'react-icons/tb';
function Header() {
  const state=useGetCart();
  const session=useSession();
  const [isShowMenu,setIsShowMenu]=useState(false);
  const {categories,isLoading}=useCategories() as IuseCategories;
  const [isMenuHamburger,setIsMenuHamburger]=useState(false);
  const pathName=usePathname();
  return (
    <header className='w-full h-12 flex items-center justify-between py-1 px-2 mt-2 mb-2  bg-red-600 text-white rounded-lg max-sm:mt-0  max-sm:rounded-none max-sm:p-[5px]'>
        <ul className='flex items-center gap-2 max-sm:hidden'>
            <li className={clsx('my-hover header-li',{
              'header-li-static':pathName==="/"
            })} ><Link href="/">صفحه اصلی</Link></li>
            <li className={clsx('my-hover header-li',{
             'header-li-static':pathName==="/books"
            })}><Link href="/books"> کتاب ها</Link></li>
            <li  onMouseEnter={()=>setIsShowMenu(true)} onMouseLeave={()=>{setIsShowMenu(false)}}><Link href="/" className='my-icons'> دسته بندی <IoIosArrowDown/>  </Link>
            {isShowMenu && (
            <ul className="absolute bg-red-500 z-20 shadow-2xl shadow-red-300 rounded-xl w-44 min-h-22 p-2 opacity-0 animate-show">
              {
                isLoading ? (<Loading/>):(   <CategoriesLi categories={categories} />)
              }
            </ul>
            )}
            </li>
        </ul>
        <button className='max-sm:inline-block hidden' onClick={()=>setIsMenuHamburger(true)}><IoMdMenu size={45} /></button>
       {isMenuHamburger && (
        <div className='absolute h-[100vh] w-40 rounded-l-md bg-white top-0  right-[-5px] z-10 opacity-0 animate-show'>
              <button onClick={()=>setIsMenuHamburger(false)} className='text-red-500 font-semibold text-2xl p-2 w-full text-left'>X</button>
              <ul className='p-1 px-2 list-decimal'>
              <li onClick={()=>setIsMenuHamburger(false)}><Link href="/" className='my-icons gap-2 justify-normal mr-1 text-text-color text-lg'><IoHomeOutline size={22} /> صفحه اصلی</Link></li>
            <li onClick={()=>setIsMenuHamburger(false)}><Link href="/books" className='my-icons gap-2 justify-normal mr-1 text-text-color text-lg'> <TbBooks /> کتاب ها</Link></li>
            <li  onClick={()=>setIsShowMenu(!isShowMenu)} ><p className=' text-text-color font-light text-lg but-menu my-icons gap-2' > <TbCategory /> دسته بندی {isShowMenu? <IoIosArrowUp /> :<IoIosArrowDown />}</p>      
            {isShowMenu && (
            <ul className="mr-2" onClick={()=>setIsMenuHamburger(false)}>
              {
                isLoading ? (<Loading/>):(   <CategoriesLi categories={categories} />)
              }
            </ul>
            )}
            </li>
              </ul>
        </div>
       )}
        <div>
             {session.status=="authenticated" ? (<div className='flex gap-1 items-center  rounded-lg px-1'>
                <Link href="/cart" className='p-1 cursor-pointer flex justify-center items-center bg-white rounded-md text-center my-hover hover:opacity-60 relative'>
                <IoBagHandle color='#2d3439' size={35} />
               {state.totalQty>=1 &&  <span className='text-white rounded-lg size-5 absolute top-[-10px] right-[-10px] bg-red-500 '>{state.totalQty}</span>}
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