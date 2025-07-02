import React from 'react'
import './Features.css'
import image from './images/Image.svg'
import bar from './images/BarChart.svg'

function Features() {
    return (
        <div className='features'>
            <div className="features__images-container">
                <img className="features__image" src={image} alt="features image"></img>
                <img className="features__bar" src={bar} alt="bar chart"></img>
            </div>
            <div className="features__content">
                <h1 className="features__content-heading">Passion to increase company revenue up to 85%</h1>
                <p className="features__content-subheading">Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging</p>
                <ul className="features__content-list">
                    <li className="features__content-list--item">Close more deals with single - page contact managment</li>
                    <li className="features__content-list--item">Enjoy one-click calling, call scripts and voicemail automation</li>
                    <li className="features__content-list--item">Take stages and milestones of your deals to keep the sales process an track</li>
                </ul>
            </div>
        </div>
    )
}

export default Features