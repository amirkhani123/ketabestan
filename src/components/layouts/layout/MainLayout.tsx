import React from 'react'
import Header from './Header'
import Footer from './Footer'


function MainLayout({children}) {
  return (
   <div className='container m-auto'>
   <Header/>
   <main className='min-h-[70vh]'>
   {children}
   </main>
   <Footer/>
   </div>
  )
}

export default MainLayout