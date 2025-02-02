import { Icategories } from '@/interface/interfaces'
import Link from 'next/link'
function CategoriesLi({categories}:{categories:Icategories[]}) {
  return (
    categories?.map((category:Icategories) => (
        <li className='header-li ' key={category._id}><Link href={{pathname:"/books",query:{"category":category.name}}}>{category.name}</Link></li>
      ))
  )
}
export default CategoriesLi