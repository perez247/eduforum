import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLogo = () => {
  return (
    <NavLink to={'/private'}>
      <div className='w-[10em]'>
        <img src="/images/logo.svg" className='hidden lg:block' alt="Logo" />
        <img src="/images/logo_single.png" className='w-[2em] lg:hidden' alt="Logo" />
      </div>
    </NavLink>
  )
}

export default NavBarLogo
