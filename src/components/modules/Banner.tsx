import Image from "next/image"

function Banner() {
  return (
    <div className="rounded-lg p-1 px-2  flex justify-between  w-full items-center bg-white mt-1 max-sm:flex-col">
       <h1 className="w-1/3 text-center text-8xl  font-bold max-sm:text-3xl max-sm:mt-2 max-sm:mb-5 max-sm:w-full">کتابستان</h1>
      <Image src="/images/banner.png" alt="banner.png" width={350} height={350} className="rounded-md " loading="eager" priority />
    </div>
  )
}

export default Banner