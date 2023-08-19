import React from 'react'
import NavBarLogo from './NavBarSection/NavBarLogo'
import SearchApp from './NavBarSection/SearchApp'
import ProfileSection from './NavBarSection/ProfileSection'

const NavBar = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className='w-full h-full flex justify-between items-center px-4 lg:px-10'>
        <div>
          <NavBarLogo />
        </div>
        <div className='w-[30%] hidden lg:block'>
          <SearchApp/>
        </div>
        <div>
          <ProfileSection />
        </div>
      </div>
    </div>
  )
}

export default NavBar
