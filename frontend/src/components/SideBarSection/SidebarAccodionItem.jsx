import React from 'react'

import {
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  import {ChevronDownIcon } from "@heroicons/react/24/outline";

const SidebarAccodionItem = (props) => {

    const list = props.listItems ? props.listItems : [];
    
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                { props.header }
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
                {
                    list.map(i => i)
                }
            </List>
          </AccordionBody>
        </Accordion>
  )
}

export default SidebarAccodionItem
