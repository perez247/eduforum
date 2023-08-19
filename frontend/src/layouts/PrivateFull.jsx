import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const PrivateFull = (props) => {
  return (
    <div className='flex relative'>
      <NavBar className='fixed bg-green-50 w-[100%] h-[60px]'/>
        <div className=' hidden md:block md:w-[250px] h-[100vh] bg-white pt-20'>
          <SideBar />
        </div>
        <div className={`w-[100%] h-[100vh] pt-20 overflow-y-auto overflow-x-hidden p-8 no-scrollbar`}>
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default PrivateFull
