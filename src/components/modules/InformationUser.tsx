"use client"
import { Iuser } from "@/interface/interfaces"
import { useState } from "react"
import InputsAccount from "./InputsAccount";
interface Iprops{
    user:Iuser,
}
function InformationUser({user}:Iprops) {
   const [isEdit,setIsEdit]=useState(false);
   const information={
    firstname:user.firstname,
    lastname:user.lastname,
    phone:user.phone,
    address:user.address,
    userId:user._id
};
  return (
    <div>
        <h3 className="font-light text-lg ">{`خوش آمدی   ${user.firstname} ${user.lastname}`}</h3>
        <div className="flex items-center gap-1  w-fit mt-1">
            <p className="text-blue-700">شماره تماس : </p>
            <span className="text-gray-700 ">{user.phone}</span>
        </div>
        <div className="flex items-center gap-1  w-fit mt-1">
            <p className="text-blue-700"> آدرس : </p>
            <span className="text-gray-700 ">{user.address}</span>
        </div>
        <div className="flex items-center gap-1  w-fit mt-1">
            <p className="text-blue-700"> عضویت در تاریخ : </p>
            <span className="text-gray-700 ">{ new Date(user.createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
        <div>
            {isEdit ? ( <button className="font-ligth mt-5 px-5 py-2 rounded-lg my-hover bg-red-500 text-white border hover:text-red-500 hover:bg-white hover:border-red-500 " onClick={()=>setIsEdit(false)} >بستن</button>):( <button className="font-ligth mt-5 px-5 py-2 rounded-lg my-hover bg-green-500 text-white border hover:text-green-500 hover:bg-white hover:border-green-500" onClick={()=>setIsEdit(true)}>ویرایش</button>) }
        </div>
       <div>
        {isEdit &&  <InputsAccount userId={user._id} information={information}/>}
       </div>
    </div>
  )
}

export default InformationUser