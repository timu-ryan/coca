import React from 'react'
import Nav from './Sections/Nav/Nav'
import Header from './Sections/Header/Header'
import Overview from './Sections/Overview/Overview'
import './MainPage.css'

const MainPage = (props) => {
    return (
        <div className='container'>
            <Nav />
            <Header />
            <Overview />
        </div>
    )
}

export default MainPage