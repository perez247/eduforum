import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
  import {
    UserCircleIcon,
    PowerIcon
  } from "@heroicons/react/24/solid";
  import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { authUtility } from '../../Helpers/AuthUtility';

const ProfileImage = () => {
  const navigate = useNavigate();

  const signOut = () => {
    authUtility.logOut();
    navigate('/public/auth')
  }

  return (
<Menu>
      <MenuHandler>
        <UserCircleIcon className="h-8 w-8 cursor-pointer text-primary" />
      </MenuHandler>
      <MenuList>
        <NavLink to={`/private/profile/1`}>
            <MenuItem className="flex items-center gap-2">
                <UserCircleIcon className="h-4 w-4 cursor-pointer" />
                <span className='text-sm'>My Profile</span>
            </MenuItem>
        </NavLink>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 " onClick={signOut}>
            <PowerIcon className="h-4 w-4 cursor-pointer" />
          <span className='text-sm'>Sign Out</span>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileImage
