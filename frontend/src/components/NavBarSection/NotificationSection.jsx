import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
  import {
    BellIcon,
    UserCircleIcon
  } from "@heroicons/react/24/solid";


const NotificationSection = () => {
  return (
<Menu>
      <MenuHandler>
      <BellIcon className="h-8 w-8 cursor-pointer text-primary" />
      </MenuHandler>
      <MenuList className="flex flex-col gap-2">
        <MenuItem className="flex items-center gap-1 py-2 pr-4 pl-0 ">
            <UserCircleIcon className="h-12 w-12 cursor-pointer text-primary" />
          <div className="flex flex-col gap-1">
            <span className='text-xs'>
                <strong>Tania</strong> send you a message
            </span>
            <span className='text-xs text-gray-600'>13 minutes ago</span>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-1 py-2 pr-4 pl-0 ">
            <UserCircleIcon className="h-12 w-12 cursor-pointer text-primary" />
          <div className="flex flex-col gap-1">
            <span className='text-xs'>
                <strong>John</strong> send you a message
            </span>
            <span className='text-xs text-gray-600'>1 hour ago</span>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default NotificationSection
