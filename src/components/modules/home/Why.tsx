import { Fade } from "react-awesome-reveal"
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci"
import { IoPricetagOutline } from "react-icons/io5"
import { MdOutlineSupportAgent } from "react-icons/md"
function Why() {
  return (
    <div className="w-full my-2 ">
        <h3 className="font-normal text-2xl ">چرا ما ؟ </h3>
        <div className="flex items-center justify-between gap-2 py-3 flex-wrap max-sm:gap-1 max-md:mx-1 max-sm:justify-center ">
        <Fade direction="up" cascade triggerOnce>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between size-40  max-md:size-36 ">
            <IoPricetagOutline size={75}  />
                <p className="font-light text-xl max-md:text-lg ">قیمت مناسب </p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between size-40 max-md:size-36">
            <MdOutlineSupportAgent size={75}/>
              <p className="font-light text-lg   max-md:text-[19px]">پشتیبانی  </p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between size-40 max-md:size-36 ">
            <CiDeliveryTruck size={75} />
                <p className="font-light text-xl  max-md:text-lg "> ارسال رایگان</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between size-40 max-md:size-36">
            <CiDiscount1 size={75} />
               <p className="font-light text-xl  max-md:text-lg ">تخفیفات متنوع</p>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Why