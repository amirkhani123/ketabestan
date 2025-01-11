import React from 'react'
import { useFormStatus } from 'react-dom';
interface Iprops{
  textPrimary:string,
  textSecond:string
}
function Submit({textPrimary,textSecond}:Iprops) {
  const {pending}=useFormStatus();
  return (
    <button className="my-submit my-hover " disabled={pending}>

      {pending ? textSecond:textPrimary}
    </button>
  )
}

export default Submit;