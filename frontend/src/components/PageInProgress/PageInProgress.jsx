import React from 'react'
import Image from "../../assets/images/developing.png";

const PageInProgress = () => {
  return (
    <div className='h-2/3 w-full flex justify-center flex-col items-center'>
        <img className='h-96 w-92' src={Image} alt="IN PROGRESS"/>
        <p className='text-2xl text-primary'>Page In progress</p>
    </div>
  )
}

export default PageInProgress