import { IBook } from "@/interface/interfaces"
import Image from "next/image"
import Link from "next/link"

function RenderBooks({book}:{book:IBook}) {
  return (
    <div className="w-60 overflow-hidden rounded-lg shadow-xl">
        <Image src={book.image} alt="image.png" width={300} height={200}/>
        <div className="flex items-center justify-between">
        <h1 className="font-light text-base text-gray-900 mt-1 mr-1">{book.name}</h1>
        <h2 className="font-light text-base text-gray-700 mt-1 ml-1">{book.price.toLocaleString("fa-ir")} تومان</h2>
        </div>
       <Link href={`books/${book._id}`} className="w-full bg-red-500  text-white block text-center mt-2 my-hover hover:opacity-50">
       صفحه کتاب
       </Link>
    </div>
  )
}

export default RenderBooks