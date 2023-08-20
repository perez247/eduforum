import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  import {
    ChevronDownIcon,
    ChevronUpIcon,
    PlusIcon
  } from "@heroicons/react/24/solid";
import EducationalItem from './EducationalItem';
import AddEducationalItem from '../Modals/AddEducationalItem';

const EducationalInstitution = (props) => {
    const [openAcc1, setOpenAcc1] = React.useState(props.state);
    const [openModal, setOpenModal] = React.useState(false);

    const [items, setItems] = React.useState([]);
   
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

    const toggleAddEdu = (state) => {
      setOpenModal(state)
    }

    const addEdu = (data) => {
      setItems(d => {
        d.push(data);
        return d;
      })
    }

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
        <PlusIcon onClick={toggleAddEdu.bind(null, true)} className="h-7 w-7 bg-primary text-white font-extrabold float-right cursor-pointer"/>
        <AddEducationalItem open={openModal} toggleModal={toggleAddEdu} add={addEdu} />
      
        {
          items.map((x, index) => <EducationalItem key={index} item={x} /> )
        }

    </AccordionBody>
  </Accordion>
  )
}

export default EducationalInstitution
