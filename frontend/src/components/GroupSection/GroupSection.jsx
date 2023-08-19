import React from 'react'
import GroupCard from '../GroupCard/GroupCard'

const GroupSection = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className='w-full border-b-2 border-tertiary'>
        <span className='text-4xl'>{props.sectionName}</span>
      </div>
      <div className='flex flex-wrap gap-5 py-8'>
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
    </div>
  )
}

export default GroupSection
