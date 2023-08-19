import React from 'react'
import NavBarLogo from './NavBarSection/NavBarLogo'
import SearchApp from './NavBarSection/SearchApp'

const NavBar = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className='w-full h-full flex justify-between items-center px-10'>
        <div>
          <NavBarLogo />
        </div>
        <div className='w-[30%]'>
          <SearchApp/>
        </div>
        <div>profile</div>
      </div>
    </div>
  )
}

export default NavBar
