import React, { useState } from 'react'
import './header.css'
import Head from './Head'
import { Link } from 'react-router-dom'
import {FaTimesCircle, FaBars} from 'react-icons/fa'

const Header = () => {

    const [click, setClick] = useState(false)

  return (
    <>
    <Head />
    <header>
        <nav className="flexSB">
            <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/game'>All Games</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/team'>Team</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="start">
                <div className="button">GET CERTIFIED</div>
            </div>
            <button className="toggle" onClick={() => setClick(!click)}>
                {click ? <FaTimesCircle /> : <FaBars />}
            </button>
        </nav>
    </header>
    </>
  )
}

export default Header
