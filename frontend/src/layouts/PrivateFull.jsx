import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { useSelector, useDispatch } from 'react-redux';
import {
  Drawer
} from "@material-tailwind/react";
import { layoutActions } from '../store/common/layoutSlice';

const PrivateFull = (props) => {

  const dispose = useDispatch();

  const {drawer} = useSelector(s => s.layout);

  const closeDrawer = () => dispose(layoutActions.setDrawer(false));

  return (
    <div className='flex relative'>
      <NavBar className='fixed bg-white w-[100%] h-[80px] border-b-2 border-tertiary z-10'/>
        <div className='hidden lg:block md:w-[250px] h-[100vh] bg-white pt-20'>
          <SideBar />
        </div>
        <Drawer open={drawer} onClose={closeDrawer} className="lg:hidden">
          <SideBar />
        </Drawer>
        <div className={`w-[100%] h-[100vh] pt-20 overflow-y-auto overflow-x-hidden no-scrollbar`}>
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default PrivateFull
