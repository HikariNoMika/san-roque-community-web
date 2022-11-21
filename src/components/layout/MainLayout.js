import React from 'react'
import Navbar from '../navbar/Navbar'
import './mainlayout.scss'

function MainLayout({children}) {
  return (
    <div className='main'>
    <Navbar/>
    <div>{children}</div>
    </div>
  )
}

export default MainLayout