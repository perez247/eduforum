import React from 'react'
import MyInformation from '../../../components/ProfileSection/MyInformation'
import EducationalInstitution from '../../../components/ProfileSection/EducationalInstitution'

const Profile = () => {
  return (
    <>
        <div className='mb-8 bg-purple-50 py-4 flex justify-between items-center lg:pr-4'>
            <div className='text-5xl'>Profile</div>
        </div>
        <MyInformation state={true} />
        <EducationalInstitution state={false} />
    </>
  )
}

export default Profile
