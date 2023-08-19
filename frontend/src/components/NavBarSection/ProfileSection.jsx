import React from 'react'
import {
    BellIcon,
    ChatBubbleLeftRightIcon,
    Bars3Icon
  } from "@heroicons/react/24/solid";
  
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../store/common/layoutSlice';
import ProfileImage from './ProfileImage';
import NotificationSection from './NotificationSection';

const ProfileSection = () => {

    const dispose = useDispatch();

    const handleDrawer = () => {
        dispose(layoutActions.setDrawer(true));
    }

  return (
    <div className='flex gap-10'>
        {/* <ChatBubbleLeftRightIcon className="h-8 w-8 cursor-pointer text-primary" /> */}
        <NotificationSection/>
        <ProfileImage />
        <Bars3Icon onClick={handleDrawer} className="h-8 w-8 lg:hidden cursor-pointer text-primary" />
    </div>
  )
}

export default ProfileSection
