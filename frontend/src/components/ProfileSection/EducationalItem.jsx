import React from 'react'
import { Button, Chip, Input } from "@material-tailwind/react";
import InputControl from '../Forms/InputControl';

const EducationalItem = (props) => {

  const prop = props.item;

  const startDate = new Date(prop.startDate);
  const endDate = new Date(prop.endDate);
  return (
    <div className='border-l-4 border-primary pl-4'>
      <span className='text-lg font-bold'>{prop.educationInstitution}</span> <span> {startDate.toLocaleDateString('en-US')} to {endDate.toLocaleDateString('en-US')}</span>
      <div>{prop.courseOfStudy} ({prop.levelOfStudy})</div>
      <div className='flex gap-5 my-3'>
        {prop.institutionEmail} 
        <input type="text" placeholder='token' className=' h-6' />
        {/* Rejected */}
        {/* <Chip color="red" size='sm' value="Declined" />   */}

         {/*Accepted  */}
        {/* <Chip color="green" size='sm' value="Verified" /> */}

        {/* Reviewing */}
        {/* <Chip color="amber" size='sm' value="Reviewing" /> */}
      </div>
      
      <div className='flex gap-6'>
          <Button className='text-xs h-6 flex items-center' size='sm'>Get token</Button>
          <Button className='text-xs h-6 flex items-center' size='sm'>Verify email</Button>
      </div>

    </div>
  )
}

export default EducationalItem
