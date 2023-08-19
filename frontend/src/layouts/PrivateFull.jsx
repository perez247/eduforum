import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const PrivateFull = (props) => {
  return (
    <div className='flex relative'>
      <NavBar className='fixed bg-white w-[100%] h-[80px] border-b-2 border-tertiary'/>
        <div className=' hidden md:block md:w-[250px] h-[100vh] bg-white pt-20'>
          <SideBar />
        </div>
        <div className={`w-[100%] h-[100vh] pt-24 overflow-y-auto overflow-x-hidden p-8 no-scrollbar`}>
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default PrivateFull
