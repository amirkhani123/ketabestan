import { Fade } from "react-awesome-reveal"

function WhatBuy() {
  return (
    <div className="w-full mt-8">
        <h4 className="font-normal text-2xl my-3 max-md:text-lg">چگونه کتاب مورد علاقمو بخرم ؟ 🤔</h4>
        <Fade cascade direction="up" triggerOnce>
        <ul className="list-decimal pr-5 max-sm:pr-7 w-full">
            <li className="font-light text-xl">ثبت نام در سایت </li>
            <li className="font-light text-xl">پیدا کردن کتاب مورد علاقه</li>
            <li className="font-light text-xl">اضافه در سبد خرید</li>
            <li className="font-light text-xl">تکمیل اطلاعات</li>
            <li className="font-light text-xl">ثبت نهایی خرید </li>
        </ul>
        </Fade>
    </div>
  )
}

export default WhatBuy