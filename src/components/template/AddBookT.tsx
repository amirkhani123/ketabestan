"use client"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react"
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import CategoriesLable from "../ui/CategoriesLable";
import Loading from "../ui/Loading";
import { IApi, IBook, Icategories } from "@/interface/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IcloudinaryUploadWidgetInfo {
    secure_url: string;
  }
function AddBookT({data}:{data?:IBook}) {
    const router=useRouter();
    const [formValue,setFormvalue]=useState({
        name:"",
        price:0,
        author:"",
        publisher:"",
        numberpage:0,
        datepublish:new Date(),
        image:"",
        category:""
    });
    const [categories,setCategories]=useState<Icategories[]>();
    useEffect(()=>{
        if(data){
            setFormvalue(data);
        }
        async function fetchData(){
           const response=await fetch("/api/book/categories");
           const result=await response.json();
           if(result.data){
               setCategories(result.data);
           }else{
            toast.error(result.message);
           }
        }
        fetchData();
    },[router,data])
    const changeEvent=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name=="category"){
            setFormvalue(formValue=>({...formValue,[e.target.name]:e.target.id}));
        }else{
            setFormvalue(formValue=>({...formValue,[e.target.name]:e.target.value}));
        }
        
    }
    const setdata=(e)=>{
        setFormvalue(formValue=>({...formValue,datepublish:new Date(e)}));
    }
    const editHandler=async()=>{
        const res=await fetch(`/api/book/${data?._id}`,{
            method:"PUT",
            body:JSON.stringify(formValue),
            headers:{"Content-Type":"application/json"}
        });
        const result=await res.json() as IApi;
        if(result.status=="success"){
            toast.success(result.message)
        }
    }
      const addBook=async()=>{
        const result=await fetch("/api/book/add-book",{
            method:"POST",
            body:JSON.stringify(formValue),
            headers:{"Content-Type":"application/json"}
        });
        const json=await result.json() as IApi;
        if(json.status=="failed"){
            toast.error(json.message);
        }else{
            toast.success(json.message);
        }
      }
  return (
  <div className="flex  flex-col gap-2">
    <form className="flex  flex-col gap-2">
        <input className="form-input-book" type="text" name="name" id="name" placeholder="نام کتاب ..." value={formValue.name} onChange={changeEvent} autoComplete="name"/>
        <label className="font-light text-sm" htmlFor="price">قیمت کتاب :</label>
        <input className="form-input-book"  type="number" name="price" id="price" placeholder="قیمت کتاب  ..." value={formValue.price} onChange={changeEvent}/>
        <input className="form-input-book" type="text" name="author" id="author" placeholder="نام نویسنده کتاب ..."  value={formValue.author} onChange={changeEvent}/>
        <input className="form-input-book" type="text" name="publisher" id="publisher" placeholder="نام ناشر ..." value={formValue.publisher} onChange={changeEvent}/>
        <label className="font-light text-sm" htmlFor="numberpage">تعداد صفحات کتاب :</label>
        <input className="form-input-book" type="number" name="numberpage" id="numberpage"  value={formValue.numberpage} onChange={changeEvent}/>
        <label className="font-light text-sm" htmlFor="datepublish"> دسته بندی :</label>
    <div className="flex items-center gap-2">
       {
        categories?.length ?(  categories?.map((item)=>(
            <CategoriesLable name={item.name} key={item._id} changeEvent={changeEvent} />
        ))) :(
           <Loading/>
        )
       }
       
    </div>
    </form>
            <label className="font-light text-sm" htmlFor="datepublish">تاریخ انتشار :</label>
        <DatePicker 
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={formValue.datepublish}
        onChange={setdata}
        style={{textAlign:"center",cursor:"pointer"}}
        name="date"
        />
        <CldUploadWidget uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} onSuccess={(result) => {
  const info = (result.info as IcloudinaryUploadWidgetInfo).secure_url;
  setFormvalue((formValue) => ({ ...formValue, image: info }));
}} > 
            {({ open }) => ( <button type="button" className="w-52 bg-green-500 text-white rounded-md my-hover hover:opacity-50 my-icons" onClick={() => open()}> <MdOutlineCloudUpload /> آپلود عکس  </button> )} 
        </CldUploadWidget>
        {
            formValue?.image && <Image src={formValue.image} width={120} height={100} className="w-24 rounded-lg shadow-2xl my-2" alt="image.png" />
        }
        {
            data? ( <button className="w-52  bg-white text-green-500 rounded-md my-hover border border-green-500 my-icons hover:opacity-50" onClick={editHandler} >
                <IoIosAddCircleOutline /> ویرایش
                </button>):( <button className="w-52  bg-white text-green-500 rounded-md my-hover border border-green-500 my-icons hover:opacity-50" onClick={addBook} >
                <IoIosAddCircleOutline /> ثبت کتاب 
                </button>)
        }
       
  </div>
  )
}

export default AddBookT