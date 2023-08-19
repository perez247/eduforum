import React from 'react'

import {
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";

const SideBarItem = (props) => {

    if (props.header) {
        return (
            <>
                <ListItemPrefix>
                {props.icon}
                </ListItemPrefix>
                <span className="mr-auto font-light text-sm">{props.name}</span>
                { 
                    props.chip && 
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                }
            </>
          )
    }

  return (
    <ListItem>
        <ListItemPrefix>
        {props.icon}
        </ListItemPrefix>
        <span className="mr-auto font-light text-sm">{props.name}</span>
        { 
            props.chip && 
            <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
        }
    </ListItem>
  )
}

export default SideBarItem
