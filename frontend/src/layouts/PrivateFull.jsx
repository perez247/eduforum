import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const PrivateFull = (props) => {
  return (
    <div>
        <NavBar/>
        <SideBar />
        <Outlet></Outlet>
    </div>
  )
}

export default PrivateFull
