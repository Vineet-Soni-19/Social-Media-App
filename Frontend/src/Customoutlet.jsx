import React from 'react'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'

const Customoutlet = () => {
  return (
    <div className='h-[100vh] w-full flex'>
      <div className='w-[100px] md:w-1/5 ml-0'><SideBar/></div>
      <div className='w-[full-100px] md:w-4/5 mr-0'><Outlet/></div>
    </div>
  )
}

export default Customoutlet

