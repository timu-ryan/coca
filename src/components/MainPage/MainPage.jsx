import React from 'react'
import Nav from './Sections/Nav/Nav'
import Header from './Sections/Header/Header'
import Overview from './Sections/Overview/Overview'
import Features from './Sections/Features/Features'
import './MainPage.css'

const MainPage = (props) => {
    return (
        <div className='container'>
            <div className='header__container'>
                <Nav />
                <Header />
            </div>
            <Overview />
            <Features />
        </div>
    )
}

export default MainPage