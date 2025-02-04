import Link from "next/link"
import { CgSmileSad } from "react-icons/cg"

function NotFoundPage() {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center flex-col gap-2">
        <p className="font-normal text-xl ">هیچ صفحه ای یافت نشد </p>
        <CgSmileSad size={45} color="red"/>
        <Link href="/" className="text-blue-500 font-light text-lg mt-2">صفحه اصلی</Link>
    </div>
  )
}

export default NotFoundPage