
function CategoriesLable({name,changeEvent}:{name:string,changeEvent:(e:React.ChangeEvent<HTMLInputElement>)=>void}) {
  return (
     <label htmlFor={name} className="has-[:checked]:border-blue-500 my-hover flex items-center gap-2 w-fit p-1 rounded-md shadow-xl cursor-pointer border text-blue-500 ">
        <input type="radio" id={name} name="categories" onChange={changeEvent}/>
       {name}
        </label>
  
  )
}

export default CategoriesLable