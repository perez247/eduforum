import React from 'react'
import { Button, Chip, Input } from "@material-tailwind/react";
import InputControl from '../Forms/InputControl';

const EducationalItem = (props) => {

  const prop = props.item;

  const startDate = new Date(prop.startDate);
  const endDate = new Date(prop.endDate);
  return (
    <div className='border-l-4 border-primary pl-4 mb-8 '>
      <span className='text-lg font-bold'>{prop.institution.name}</span> <span> {startDate.toLocaleDateString('en-US')} to {endDate.toLocaleDateString('en-US')}</span>
      <div>{prop.courseOfStudy} ({prop.levelOfStudy})</div>
      <div className='flex gap-5 my-3'>
        {prop.email} 
        {prop.verificationStatus==='not_started' && <input type="text" placeholder='token' className=' h-6' />}
        
        {/* Rejected */}
        {prop.verificationStatus==='failed' && <Chip color="red" size='sm' value="Declined" /> } 

         {/*Accepted  */}
        {prop.verificationStatus==='success' && <Chip color="green" size='sm' value="Verified" />}

        {/* Reviewing */}
        {prop.verificationStatus==='pending' && <Chip color="amber" size='sm' value="Reviewing" />}
      </div>
      
      {   
        prop.verificationStatus==='not_started' &&
        <div className='flex gap-6'>
          <Button className='text-xs h-6 flex items-center' size='sm'>Get token</Button>
          <Button className='text-xs h-6 flex items-center' size='sm'>Verify email</Button>
        </div>
      }

    </div>
  )
}

export default EducationalItem
