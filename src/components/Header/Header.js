import React from 'react'
import './Header.css'
import MyImageSvg from '../../utils/images/Logo.svg';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href='#' className='header__logo-link'>
          <img src={MyImageSvg} alt='fuck' />
        </a>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>Home</li>
          <li className='header__nav-item'>About</li>
          <li className='header__nav-item'>Blog</li>
          <li className='header__nav-item'>Pricing</li>
        </ul>
        <div className='header__nav-link'>
          <a href='#'>Contact Us →</a>
        </div>
      </nav>
    </header>
  )
}
export default Header