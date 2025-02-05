import { IBook } from "@/interface/interfaces"
import Image from "next/image"
import Control from "../modules/Control"

function BookDetailsT({myBook}:{myBook:IBook}) {
  return (
    <div className="flex  w-[65%] justify-between max-sm:flex-col ">
        <Image src={myBook.image} alt="image.png" priority width={300} height={300} className="w-[300px] rounded-md" />
        <div>
            <h1 className="font-normal text-lg">{myBook.name}</h1>
            <h2 className="my-1 text-base font-light">{myBook.author}</h2>
            <h3 className="my-2 text-base font-extralight">{myBook.publisher}</h3>
            <p className="mt-3 font-light text-xl ">{myBook.price.toLocaleString()} تومان</p>
          <div className="w-[240px] mt-5 h-[50px] text-white ">
          <Control myBook={myBook} />
          </div>
        </div>
        <div className="w-[200px] ">
            <div className="flex items-center justify-between my-2">
            <p className="font-light">کد کتاب :</p>
            <span>{myBook.codebook}</span>
            </div>
            <div className="flex items-center justify-between my-2">
            <p  className="font-light">تعدا صفحات : </p>
            <span>{myBook.numberpage}</span>
            </div>
            <div className="flex items-center justify-between my-2">
            <p  className="font-light">سال انتشار :</p>
            <span>{new Date(myBook.datepublish).toLocaleDateString("fa-ir")}</span>
            </div>
            <div className="flex items-center justify-between my-2">
            <p  className="font-light"> دسته بندی :</p>
            <span>{myBook.category}</span>
            </div>
        </div>
    </div>
  )
}

export default BookDetailsT