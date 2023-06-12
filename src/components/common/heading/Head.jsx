import React from 'react'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'
import { Link } from 'react-router-dom'
import './header.css'

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
            <div className="logo">
                <h1>GAMING-PRO</h1>
                <span>BEST GAMING PLACE</span>
            </div>

            <div className="social">
                <Link to="https://github.com/DSCaki">
                <DiGithub className='icon'/>
                </Link>

                <Link to="https://www.linkedin.com/in/akthar-aki-578b45129/">
                <TiSocialLinkedinCircular className='icon'/>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head
