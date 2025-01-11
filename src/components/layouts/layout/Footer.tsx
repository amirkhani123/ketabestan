import Link from "next/link"
import { FaInstagram } from "react-icons/fa6"
import { RiTelegramLine } from "react-icons/ri"
import { TbWorldWww } from "react-icons/tb"

function Footer() {
  return (
    <div className='text-white bg-red-600 w-full   rounded-t-lg py-1 px-2 mt-5 flex  justify-between'>
         <div >
          <p className="font-light text-lg"> چرا ما ؟</p>
          <ul className="list-disc list-inside" >
            <li>قیمت مناسب </li>
            <li>پشتیبانی 24 ساعته</li>
            <li>ارسال رایگان</li>
            <li>تخفیفات متنوع</li>
          </ul>
         </div>
         <div className="ml-5 mt-3">
          <p className="font-light text-lg ">راهای ارتباط با ما</p>
          <ul className="flex items-center justify-between mt-2 ">
            <li className="my-hover hover:text-purple-500"><Link href=""><FaInstagram size={30}/></Link></li>
            <li className="my-hover hover:text-purple-500"><Link href=""><RiTelegramLine size={30}/></Link></li>
            <li className="my-hover hover:text-purple-500"><Link href=""><TbWorldWww size={30}/></Link></li>
          </ul>
         </div>
    </div>
  )
}

export default Footer