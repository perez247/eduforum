import React from 'react';
import {
  Card,
  List,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import SideBarItem from './SideBarSection/SideBarItem';
import SidebarAccodionItem from './SideBarSection/SidebarAccodionItem';
 

const SideBar = () => {

  return (
<Card className="w-full h-full overflow-y-auto no-scrollbar">
      <List>
        <SidebarAccodionItem 
          header={ 
            <SideBarItem header={true} icon={<PresentationChartBarIcon className="h-5 w-5"/>} name="Dashboard" />
           }
           listItems={[
            <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />} name='Analytics' />,
            <SideBarItem icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />} name='Reporting' />
           ]}
        />
        <hr className="my-2 border-blue-gray-50" />
        <SideBarItem 
          icon={<InboxIcon className="h-5 w-5" />}
          name='Inbox'
          chip={<Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />}
        />
        <SideBarItem icon={<PowerIcon className="h-5 w-5" />} name='Log Out' />
      </List>
    </Card>
  )
}

export default SideBar
