import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header__content'>
                <div className='header__content-title'>
                    Digitally forward creative
                </div>
                <p className='header__content-text'>
                    When it comes to interactive<br></br> marketing, we've got you covered.<br></br>
                    Be where the world is going
                </p>
                <div className='header__form'>
                    <div>
                        <input type="email" id="email" name="email" placeholder='Enter your email'></input>
                        <hr></hr>
                    </div>
                    <button>Try for free</button>
                </div>
            </div>
        </div>
    )
}

export default Header