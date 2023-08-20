import React from 'react';
import {
  Card,
  List,
} from "@material-tailwind/react";
import {
  GlobeAmericasIcon,
  UsersIcon,
  PowerIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import SideBarItem from './SideBarSection/SideBarItem';
import SidebarAccodionItem from './SideBarSection/SidebarAccodionItem';
import SearchApp from './NavBarSection/SearchApp';
import { NavLink, useNavigate } from 'react-router-dom';
import { authUtility } from '../Helpers/AuthUtility';
 

const SideBar = () => {
  const navigate = useNavigate()

  const user = authUtility.getCurrentUser();

  if (!user) {
    authUtility.logOut();
    navigate('private');
  }

  return (
<Card className="w-full h-full overflow-y-auto no-scrollbar rounded-none lg:border-r-2 border-tertiary">
      <List>
        {
          user.type === 'institution' && <NavLink to={`/private/students`} className={({ isActive }) => (isActive ? ' bg-purple-50' : '')} >
            <SideBarItem 
              icon={<UsersIcon className="h-5 w-5" />}
              name='Users'

              // chip={<Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />}
            />
          </NavLink>
        }
        {
          user.type === 'user' && <NavLink to={`/private/explore`} className={({ isActive }) => (isActive ? ' bg-purple-50' : '')} >
            <SideBarItem 
              icon={<GlobeAmericasIcon className="h-5 w-5" />}
              name='Explore'

              // chip={<Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />}
            />
          </NavLink>
        }

        {/* <hr className="my-2 border-blue-gray-50" /> */}
        <NavLink to={`/private/my-groups`} className={({ isActive }) => (isActive ? ' bg-purple-50' : '')} >
          <SideBarItem icon={<UserGroupIcon strokeWidth={3} className="h-5 w-5" />} name='My Groups' />
        </NavLink>
        <SearchApp className={`lg:hidden`} />

      </List>
    </Card>
  )
}

export default SideBar
