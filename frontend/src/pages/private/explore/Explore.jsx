import React from 'react'
import GroupSection from '../../../components/GroupSection/GroupSection'
import {
    FunnelIcon
  } from "@heroicons/react/24/solid";

const Explore = () => {
  return (
    <>
        <div className='mb-8 bg-purple-50 py-4 flex justify-between items-center lg:pr-4'>
            <div className='text-5xl'>Explore</div>
            <div> 
            <FunnelIcon className="h-8 w-8 cursor-pointer text-tertiary" />
            </div>
        </div>
        <GroupSection sectionName="Finance" />
        <GroupSection sectionName="Career" />
        <GroupSection sectionName="Health" />
    </>
  )
}

export default Explore
