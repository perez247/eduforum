import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const PrivateFull = (props) => {
  return (
    <div className='flex relative gap-10'>
        <div className=' hidden md:block md:w-[250px] h-[100vh] bg-white'>
          <NavBar/>
          <SideBar />
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default PrivateFull
