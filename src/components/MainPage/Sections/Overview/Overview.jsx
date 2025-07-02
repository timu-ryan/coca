import React from 'react'
import './Overview.css'
import logo1 from './icons/logo1.svg'
import logo2 from './icons/logo2.svg'
import logo3 from './icons/logo3.svg'
import logo4 from './icons/logo4.svg'

function Overview() {
    return (
        <div className='overview'>
            <div className='overview__container'>
                <div className='overview__header'>
                    <h1 className='overview__header-title'>Coca help our client solve complex customer problems with date that does more.</h1>
                    <p className='overview__header-description'>Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration</p>
                </div>
                <div className='overview__grid'>
                    <div className='overview__grid-item'>
                        <div>
                            <img className='overview__grid-item--icon' src={logo1} alt="icon"></img>
                        </div>
                        <h2 className='overview__grid-item--title'>Build your date fundamental</h2>
                        <p className="overview__grid-item--description">Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.</p>
                    </div>
                    <div className='overview__grid-item'>
                        <div>
                            <img className='overview__grid-item--icon' src={logo2} alt="icon"></img>
                        </div>
                        <h2 className='overview__grid-item--title'>Measure more effective</h2>
                        <p className="overview__grid-item--description">Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.</p>
                    </div>
                    <div className='overview__grid-item'>
                        <div>
                            <img className='overview__grid-item--icon' src={logo3} alt="icon"></img>
                        </div>
                        <h2 className='overview__grid-item--title'>Activate your date</h2>
                        <p className="overview__grid-item--description">Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.</p>
                    </div>
                    <div className='overview__grid-item'>
                        <div>
                            <img className='overview__grid-item--icon' src={logo4} alt="icon"></img>
                        </div>
                        <h2 className='overview__grid-item--title'>Strengthen consumer privacy</h2>
                        <p className="overview__grid-item--description">Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview