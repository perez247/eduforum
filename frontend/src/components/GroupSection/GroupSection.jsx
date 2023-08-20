import React from 'react'
import GroupList from '../GroupList/GroupList'

const GroupSection = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className='w-full border-b-2 border-tertiary'>
        <span className='text-4xl'>{props.sectionName}</span>
      </div>

      <GroupList />
    </div>
  )
}

export default GroupSection
