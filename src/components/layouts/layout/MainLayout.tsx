import React from 'react'
import Header from './Header'
import Footer from './Footer'


function MainLayout({children}) {
  return (
   <div className='container m-auto'>
   <Header/>
   <div className='min-h-[70vh]'>
   {children}
   </div>
   <Footer/>
   </div>
  )
}

export default MainLayout