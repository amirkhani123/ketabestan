"use client"

import { Fade } from "react-awesome-reveal"
import toast from "react-hot-toast"
import { MdContentCopy } from "react-icons/md"

function DiscountHome() {
    const clickCopy=()=>{
        navigator.clipboard.writeText("opening50").then(()=>{
            toast.success("کپی شد :)");
        }).catch(()=>{
            toast.error("کپی نشد :(");
        })
    }
    return (
        <Fade triggerOnce direction="up" >

     <div className="w-full h-24 bg-red-500 rounded-lg p-2 flex items-center justify-between my-5 text-white">
    <p className="font-semibold text-xl ">50 درصد تخفیف به مناسبت افتتاحیه 🥳🎉</p>
    <button className="flex items-center gap-3 p-2 bg-white rounded-md text-red-500 font-normal " onClick={clickCopy} >
    <MdContentCopy size={30} />
    opening50
    </button>
     </div>
        </Fade>
    )
  }
  
  export default DiscountHome