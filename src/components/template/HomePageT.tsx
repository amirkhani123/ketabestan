import { IBook } from "@/interface/interfaces"
import Questions from "../modules/home/Questions"
import SliderHome from "../modules/home/SliderHome"
import WhatBuy from "../modules/home/WhatBuy"
import Why from "../modules/home/Why"

function HomePageT({data}:{data:IBook[]}) {
  return (
   <>
   <SliderHome data={data}/>
    <Why/>
    <WhatBuy/>
    <Questions/>
   </>
  )
}

export default HomePageT