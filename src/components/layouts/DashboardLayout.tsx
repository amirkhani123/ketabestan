import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { FaReceipt, FaRegCircleUser, FaUserLarge } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
interface IUser { _id: string; username: string; role: string; createdAt: Date; updatedAt: Date; } 
interface IProps { user: IUser; children: React.ReactNode}

function DashboardLayout({
    user,
    children,
  }:Readonly<IProps>) {
  return (
    <main className="flex gap-6  w-full max-sm:flex-col">
        <aside className="flex items-center flex-col gap-2 shadow-2xl rounded-2xl p-2 px-5 h-56 w-[18%] max-sm:hidden">
        <FaRegCircleUser size={40} />
        <span>{user.username}</span>
        <span className=" inline-block w-full h-px bg-gray-400 my-px"></span>
        <ul>
          {user.role ==="ADMIN" ? (<>
            <li className=" my-hover hover:opacity-65"><Link href="/dashboard/add-book" className="flex items-center gap-1"> <IoIosAddCircleOutline  /> ثبت کتاب</Link></li>
            <li className="my-2 my-hover hover:opacity-65"><Link href="/dashboard/moderateBooks" className="flex items-center gap-1"><FaRegEdit />  مدریت کتاب ها</Link></li>
            <li className=" my-hover mb-2 hover:opacity-65"><Link href="/dashboard/category" className="flex items-center gap-1"> <BiCategory />دسته بندی ها</Link></li>
          </>): (
            <>
             <li className="my-hover hover:opacity-65"><Link className="flex items-center gap-1" href={`/dashboard/account/${user._id}}`}><FaUserLarge size={20}/> حساب کاربری </Link></li>
             <li className="my-2 my-hover hover:opacity-65"><Link className="flex items-center gap-1" href="/"> <FaReceipt size={20} /> سفارشات</Link></li>
             </>
          ) } 
            <li><Link className="flex items-center gap-1 text-red-600 my-hover hover:opacity-65" href="/dashboard/signout"> <TbLogout size={25} /> خروج</Link></li>
        </ul>
        </aside>
       <details className="relative my-details hidden max-sm:inline-block" >
        <summary className="flex items-center gap-2 mr-2 mt-1 ">
             منو حساب کاربری <CgMenuGridO size={30}/>
        </summary>
        <ul className="absolute botton-1 right-[5px] bg-white rounded-md p-1  ">
          {user.role ==="ADMIN" ? (<>
            <li className=" my-hover hover:opacity-65"><Link href="/dashboard/add-book" className="flex items-center gap-1"> <IoIosAddCircleOutline  /> ثبت کتاب</Link></li>
            <li className="my-2 my-hover hover:opacity-65"><Link href="/dashboard/moderateBooks" className="flex items-center gap-1"><FaRegEdit />  مدریت کتاب ها</Link></li>
            <li className=" my-hover mb-2 hover:opacity-65"><Link href="/dashboard/category" className="flex items-center gap-1"> <BiCategory />دسته بندی ها</Link></li>
          </>): (
            <>
             <li className="my-hover hover:opacity-65"><Link className="flex items-center gap-1" href={`/dashboard/account/${user._id}}`}><FaUserLarge size={20}/> حساب کاربری </Link></li>
             <li className="my-2 my-hover hover:opacity-65"><Link className="flex items-center gap-1" href="/"> <FaReceipt size={20} /> سفارشات</Link></li>
             </>
          ) } 
            <li><Link className="flex items-center gap-1 text-red-600 my-hover hover:opacity-65" href="/dashboard/signout"> <TbLogout size={25} /> خروج</Link></li>
        </ul>
       </details>
        <section className="w-full shadow-2xl rounded-2xl p-2 px-5 min-h-52">
            {children}
        </section>
    </main>
  )
}

export default DashboardLayout;


