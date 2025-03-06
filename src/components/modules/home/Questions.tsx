"use client"
import questionsDB from "@/utils/constants"
import QuestionsRender from "./QuestionsRender"
import { IQuestionsDB } from "@/interface/interfaces"
import { Fade } from "react-awesome-reveal"

function Questions() {
  return (
    <div className="my-5 w-full">
     <p className="font-normal text-xl my-3">سوالات متداول ؟</p>
         <div className="w-full ">
     <Fade cascade direction="up" triggerOnce>
    {questionsDB.map((item:IQuestionsDB)=>(
        <QuestionsRender key={item.id} data={item} />
    ))}
     </Fade>
         </div>
    </div>
  )
}

export default Questions