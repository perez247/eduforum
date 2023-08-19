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
 

const SideBar = () => {

  return (
<Card className="w-full h-full overflow-y-auto no-scrollbar rounded-none border-r-2 border-tertiary">
      <List>
        <SideBarItem 
          icon={<GlobeAmericasIcon className="h-5 w-5" />}
          name='Explore'
          // chip={<Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />}
        />
        <SideBarItem icon={<PowerIcon className="h-5 w-5" />} name='Log Out' />
        <hr className="my-2 border-blue-gray-50" />
        <SidebarAccodionItem 
          header={ 
            <SideBarItem header={true} icon={<UserGroupIcon className="h-5 w-5"/>} name="My Groups" />
           }
           listItems={[
            <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />} name='Analytics' />,
            <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />} name='Reporting' />
           ]}
        />
      </List>
    </Card>
  )
}

export default SideBar
