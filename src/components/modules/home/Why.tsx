import { Fade } from "react-awesome-reveal"
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci"
import { IoPricetagOutline } from "react-icons/io5"
import { MdOutlineSupportAgent } from "react-icons/md"
function Why() {
  return (
    <div className="w-full my-2 ">
        <h3 className="font-normal text-2xl ">چرا ما ؟ </h3>
        <div className="flex items-center justify-between gap-2 py-3 max-sm:flex-wrap">
        <Fade direction="up" cascade triggerOnce>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between   size-44 ">
            <IoPricetagOutline size={65}  />
                <p className="font-light text-xl ">قیمت مناسب </p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between size-44 ">
            <MdOutlineSupportAgent size={65}/>
              <p className="font-light text-lg ">پشتیبانی 24 ساعته </p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between size-44 ">
            <CiDeliveryTruck size={65} />
                <p className="font-light text-xl "> ارسال رایگان</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white justify-between size-44 ">
            <CiDiscount1 size={65} />
               <p className="font-light text-xl ">تخفیفات متنوع</p>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Why