"use client"
import saveInformationUserAction from "@/actions/user/saveInformationUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Submit from "../ui/Submit";
interface Iprops{
    userId:string,
    information?:{
      firstname:string,
      lastname:string,
      phone:string,
      address:string,
      userId:string
    }
}
function InputsAccount({userId,information}:Iprops) {
  const router=useRouter();
  const [formData,setFormData]=useState({firstname:"",lastname:"",phone:"",address:"",userId:userId});
  useEffect(()=>{
    if(information){
     setFormData(information);
    }
  },[router]);
  const changeHandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormData(form=>({...form,[e.target.name]:e.target.value}));
  }
  const submitHandler=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  const {status,message}=await saveInformationUserAction(formData);
     if(status=="success"){
      toast.success(message);
      router.refresh()
    }else{
      toast.error(message);
     }
  }
  return (
    <form onSubmit={submitHandler}>
      {!information && (<div>
        <p>اطلاعات شما کامل نیست !!! </p>
        <span>برای خرید نیاز دارید اطلاعات را کامل کنید 🫡</span>
        </div>) }
<div className='relative w-48 mt-5'>
  <input type='text' className='my-input' required name='firstname' value={formData.firstname} onChange={changeHandler} />
  <label className='lable-input'>نام : <span className='text-red-500'>*</span></label>
</div>
<div className='relative w-48 mt-5'>
  <input type='text' className='my-input' required name='lastname' value={formData.lastname} onChange={changeHandler}/>
  <label className='lable-input'>نام خانوادگی : <span className='text-red-500'>*</span></label>
</div>
<div className='relative w-48 mt-5'>
  <input type='text' className='my-input' required inputMode="tel" name='phone' value={formData.phone} onChange={changeHandler} />
  <label className='lable-input'>شماره تماس : <span className='text-red-500'>*</span></label>
</div>
<div className='relative w-80 mt-5'>
  <input type='text' className='my-input' required name='address' value={formData.address} onChange={changeHandler}/>
  <label className='lable-input'>آدرس : <span className='text-red-500'>*</span></label>
</div>
<Submit textPrimary="ثبت اطلاعات" textSecond="درحال ثبت اطلاعات ..."/>
      </form>
  )
}

export default InputsAccount
