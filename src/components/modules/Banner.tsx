import Image from "next/image"

function Banner() {
  return (
    <div className="rounded-lg p-1 px-2  flex justify-between  w-full items-center bg-white mt-1 ">
        <div className="mb-5">
        <h1 className="text-lg font-normal ">کتابخانه ای به وسعت ایران </h1>
        <p className="font-light text-base">ارسال رایگان و پشتیبانی 24 ساعته</p>
        <p className="font-normal ">دانش در دسترس هر ایرانی</p>
        </div>
        <div>
            <Image src="/images/banner.png" alt="banner.png" width={300} height={300} className="rounded-md " loading="eager" priority />
        </div>
    </div>
  )
}

export default Banner