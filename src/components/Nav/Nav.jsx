import React from 'react'
import './Nav.css'
import Logo from '../../images/Logo.svg'

const Nav = (props) => {
  return (
    <header className='nav'>
      <img src={Logo}></img>
      
      <nav className='nav__nav'>
        <ul className='nav__nav-list'>
          <li className='nav__nav-item'>Home</li>
          <li className='nav__nav-item'>About</li>
          <li className='nav__nav-item'>Blog</li>
          <li className='nav__nav-item'>Pricing</li>
          <li className='nav__nav-item'>Contact Us →</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav