import React from 'react';
import {
  Card,
  List,
} from "@material-tailwind/react";
import {
  GlobeAmericasIcon,
  PowerIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import SideBarItem from './SideBarSection/SideBarItem';
import SidebarAccodionItem from './SideBarSection/SidebarAccodionItem';
import SearchApp from './NavBarSection/SearchApp';
import { NavLink } from 'react-router-dom';
 

const SideBar = () => {

  return (
<Card className="w-full h-full overflow-y-auto no-scrollbar rounded-none lg:border-r-2 border-tertiary">
      <List>
        <NavLink to={`/private/explore`} className={({ isActive }) => (isActive ? ' bg-purple-50' : '')} >
          <SideBarItem 
            icon={<GlobeAmericasIcon className="h-5 w-5" />}
            name='Explore'

            // chip={<Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />}
          />
        </NavLink>

        {/* <SideBarItem icon={<PowerIcon className="h-5 w-5" />} name='Log Out' /> */}

        <hr className="my-2 border-blue-gray-50" />
        <span className='text-sm font-bold ms-3 inline-block text-primary w-full'>Recent active groups</span>
        <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 -mr-3" />} name='Career Progression' />
        <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 -mr-3" />} name='Finance' />
        <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 -mr-3" />} name='Mental' />
        <NavLink to={`/private/groups`} className={({ isActive }) => (isActive ? ' bg-purple-50' : '')} >
          <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 -mr-3" />} name='View All' />
        </NavLink>
        <SearchApp className={`lg:hidden`} />

        <hr className="my-2 border-blue-gray-50" />
        
      </List>
    </Card>
  )
}

export default SideBar
