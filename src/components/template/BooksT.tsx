import { IBook } from "@/interface/interfaces"
import RenderBooks from "../modules/RenderBooks"
import SideBarBooks from "../modules/SideBarBooks"

interface Iprops{
    allBooks:IBook[],
}
async function BooksT({allBooks}:Iprops) {
  
  return (
    <div className="flex gap-3 ">
      <SideBarBooks/>
      <div className="flex gap-3 flex-wrap items-center w-[85%] max-sm:w-full max-sm:justify-center">
           {
             allBooks.map((book)=>(
               <RenderBooks key={book._id} book={book} />
              ))
            }
            </div>
    </div>
  )
}

export default BooksT