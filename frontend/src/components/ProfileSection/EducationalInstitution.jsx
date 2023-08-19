import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  import {
    ChevronDownIcon,
    ChevronUpIcon,
  } from "@heroicons/react/24/solid";

const EducationalInstitution = (props) => {
    const [openAcc1, setOpenAcc1] = React.useState(props.state);
   
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);


  return (
    <Accordion open={openAcc1}>
    <AccordionHeader className='border-b-2 border-tertiary' onClick={handleOpenAcc1}>
        <div className='flex justify-between w-full'>
            <span>Educational Institution</span>
            {!openAcc1 && <ChevronUpIcon className="h-4 w-4 cursor-pointer text-tertiary" />}
            {openAcc1 && <ChevronDownIcon className="h-4 w-4 cursor-pointer text-tertiary" />}
        </div>
    </AccordionHeader>
    <AccordionBody>
      We&apos;re not always in the position that we want to be at. We&apos;re constantly
      growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
      ourselves and actualize our dreams.
    </AccordionBody>
  </Accordion>
  )
}

export default EducationalInstitution
