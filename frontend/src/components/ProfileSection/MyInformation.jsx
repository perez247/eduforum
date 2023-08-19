import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody
  } from "@material-tailwind/react";

  import {
    ChevronDownIcon,
    ChevronUpIcon,
  } from "@heroicons/react/24/solid";
import MyInformationForm from './MyInformationForm';

const MyInformation = (props) => {
    const [openAcc1, setOpenAcc1] = React.useState(props.state);
   
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

  return (
    <Accordion open={openAcc1}>
    <AccordionHeader className='border-b-2 border-tertiary' onClick={handleOpenAcc1}>
        <div className='flex justify-between w-full'>
            <span>My Information</span>
            {!openAcc1 && <ChevronUpIcon className="h-4 w-4 cursor-pointer text-tertiary" />}
            {openAcc1 && <ChevronDownIcon className="h-4 w-4 cursor-pointer text-tertiary" />}
        </div>
    </AccordionHeader>
    <AccordionBody>
        <MyInformationForm />
    </AccordionBody>
  </Accordion>
  )
}

export default MyInformation

