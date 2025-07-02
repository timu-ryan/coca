import React from 'react'
import './Nav.css'
import Logo from '../../../../images/Logo.svg'

const Nav = (props) => {
  return (
    <header className='nav'>
      <a className="nav__logo">
        <img src={Logo}  alt="COCA logo"></img>
      </a>

      <nav className='nav__nav'>
        <ul className='nav__nav-list'>
          <li className='nav__nav-item'>
            <a className='nav__nav-item--link'>Home</a>
          </li>
          <li className='nav__nav-item'>
            <a className='nav__nav-item--link'>About</a>
          </li>
          <li className='nav__nav-item'>
            <a className='nav__nav-item--link'>Blog</a>
          </li>
          <li className='nav__nav-item'>
            <a className='nav__nav-item--link'>Pricing</a>
          </li>
          <li className='nav__nav-item'>
            <a className='nav__nav-item--link'>Contact Us →</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav